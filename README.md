# 🎬 Catálogo de Séries - Projeto Alura

Este projeto é uma aplicação web simples que exibe um catálogo de séries de TV. As informações de cada série são carregadas a partir de um arquivo JSON local e apresentadas de forma organizada e visualmente agradável para o usuário.

Este projeto foi desenvolvido como parte dos estudos na plataforma Alura.

## ✨ Funcionalidades

- **Listagem de Séries**: Exibe uma coleção de séries a partir de uma base de dados local.
- **Detalhes da Série**: Para cada item, são mostrados:
  - Imagem de capa
  - Nome
  - Descrição/Sinopse
  - Ano de lançamento
  - Gênero
- **Link Externo**: Cada série possui um link que redireciona para uma página com mais informações (como Wikipédia ou IMDb).

## 🖼️ Demonstração

*(Sugestão: Adicione aqui um screenshot da sua aplicação em funcionamento!)*

![Exemplo de como a aplicação se parece](https://via.placeholder.com/600x400.png?text=Insira+um+screenshot+do+seu+projeto+aqui)

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando tecnologias web padrões:

- **HTML5**: Para a estrutura semântica da página.
- **CSS3**: Para a estilização e o layout dos componentes.
- **JavaScript**: Para a manipulação do DOM e o carregamento dinâmico dos dados do JSON.
- **JSON**: Como formato para armazenar os dados das séries.

## 📂 Estrutura do Projeto

```
ProjetoAlura/
├── 📄 index.html       # Arquivo principal da aplicação
├── 🎨 style.css         # Folha de estilos
├── ⚙️ script.js         # Lógica da aplicação em JavaScript
└── 📦 data.json         # Banco de dados com as séries
└── 📄 README.md         # Documentação do projeto
```

### Estrutura do `data.json`

O arquivo `data.json` contém uma lista de objetos, onde cada objeto representa uma série e possui a seguinte estrutura:

```json
[
  {
    "nome": "Nome da Série",
    "descricao": "Uma breve sinopse sobre a série.",
    "ano": 2023,
    "genero": "Gênero da Série",
    "link": "URL para mais informações",
    "imagem": "URL da imagem de capa"
  }
]
```

## 🚀 Como Executar o Projeto

Como este é um projeto front-end estático, você não precisa de um servidor complexo para executá-lo.

1.  **Clone o repositório** (ou baixe os arquivos):
    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    ```

2.  **Abra o arquivo `index.html`**:
    Navegue até a pasta do projeto e abra o arquivo `index.html` diretamente no seu navegador de preferência (Google Chrome, Firefox, etc.).

Pronto! A aplicação será carregada e exibirá o catálogo de séries.

---

Feito com ❤️ por **[Seu Nome]**.
