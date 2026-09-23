const cardContainer = document.querySelector(".card-container");
const campoBusca = document.querySelector("header input");
const filtroGenero = document.getElementById("filtro-genero");
const botaoLimpar = document.getElementById("botao-limpar");
let dados = [];

async function buscarDados() {
    if (dados.length === 0) {
        let resposta = await fetch("data.json");
        dados = await resposta.json();
    }
}
function popularFiltroGeneros() {
    // Extrai gêneros únicos usando um Set para evitar duplicatas
    const generos = [...new Set(dados.map(dado => dado.genero))];
    
    // Adiciona a opção "Todos" no início
    filtroGenero.innerHTML = '<option value="todos">Todos os Gêneros</option>';

    generos.sort().forEach(genero => {
        const option = document.createElement('option');
        option.value = genero.toLowerCase();
        option.textContent = genero;
        filtroGenero.appendChild(option);
    });
}

function filtrarEExibir() {
    const termoBusca = campoBusca.value.toLowerCase();
    const generoSelecionado = filtroGenero.value;

    const dadosFiltrados = dados.filter(dado => {
        const correspondeBusca = dado.nome.toLowerCase().includes(termoBusca) || 
                               dado.descricao.toLowerCase().includes(termoBusca);

        const correspondeGenero = generoSelecionado === 'todos' || dado.genero.toLowerCase() === generoSelecionado;

        return correspondeBusca && correspondeGenero;
    });

    renderizarCards(dadosFiltrados);
}

function limparFiltros() {
    campoBusca.value = "";
    filtroGenero.value = "todos";
    renderizarCards(dados);
}

// Associa as funções aos eventos corretos
document.getElementById('botao-busca').addEventListener('click', filtrarEExibir);
botaoLimpar.addEventListener('click', limparFiltros);

function renderizarCards(dadosParaRenderizar) {
    cardContainer.innerHTML = "";
    for (const dado of dadosParaRenderizar) {
        let article = document.createElement("article");
        article.classList.add("card");
        article.innerHTML = `
            <div class="card-image-container">
                <img src="${dado.imagem}" alt="Pôster da série ${dado.nome}">
            </div>
            <div class="card-text-container">
                <h2>${dado.nome}</h2>
                <p>${dado.descricao}</p>
                <p><strong>Ano:</strong> ${dado.ano}</p>
                <p><strong>Gênero:</strong> ${dado.genero}</p>
                <button class="saiba-mais">Saiba mais</button>
            </div>
        `;
        
        // Se o pôster não carregar, troca por uma capa com o gênero e o nome da série.
        // Alguns sites bloqueiam o uso da imagem e devolvem 1×1 pixel em vez de dar erro.
        const poster = article.querySelector('img');
        const trocarPorCapa = () => {
            const capa = document.createElement('div');
            capa.className = 'card-capa';
            capa.innerHTML = `<span class="card-capa-genero"></span><span class="card-capa-nome"></span>`;
            capa.querySelector('.card-capa-genero').textContent = dado.genero;
            capa.querySelector('.card-capa-nome').textContent = dado.nome;
            poster.replaceWith(capa);
        };
        poster.addEventListener('error', trocarPorCapa, { once: true });
        poster.addEventListener('load', () => {
            if (poster.naturalWidth < 10) trocarPorCapa();
        }, { once: true });

        // Adiciona evento de clique para o botão "Saiba mais" abrir o modal
        article.querySelector('.saiba-mais').addEventListener('click', (e) => {
            abrirModal(dado);
        });

        cardContainer.appendChild(article);
 }
}

async function carregarPagina() {
    await buscarDados();
    popularFiltroGeneros();
    renderizarCards(dados);

    // Adiciona listeners para busca e filtro em tempo real
    campoBusca.addEventListener('input', filtrarEExibir);
    filtroGenero.addEventListener('change', filtrarEExibir);
}

carregarPagina();

// --- Lógica do Modal ---

const modal = document.getElementById("modal");
const modalTitulo = document.getElementById("modalTitulo");
const modalDescricao = document.getElementById("modalDescricao");
const modalAno = document.getElementById("modalAno");
const modalGenero = document.getElementById("modalGenero");
const modalLink = document.getElementById("modalLink");
const fecharModal = document.getElementById("fecharModal");

function abrirModal(serie) {
  modalTitulo.textContent = serie.nome;
  modalDescricao.textContent = serie.descricao;
  modalAno.textContent = "Ano de lançamento: " + serie.ano;
  modalGenero.textContent = "Gênero: " + serie.genero;
  modalLink.href = serie.link;

  modal.style.display = "block"; // exibe o modal
}

// Fechar modal ao clicar no X
fecharModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Fechar modal clicando fora dele
window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});