<h1 align="center">MyContacts API</h1>
<p align="center">📳 API REST para gerenciamento de contatos</p>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/vilsonsampaio/mycontacts-api.svg?color=5061FC">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/top/vilsonsampaio/mycontacts-api.svg?color=5061FC">

  <a href="https://github.com/vilsonsampaio/mycontacts-api/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/vilsonsampaio/mycontacts-api.svg?color=5061FC">
  </a>

  <a href="https://github.com/vilsonsampaio/">
    <img alt="Author" src="https://img.shields.io/badge/author-Vilson%20Sampaio-5061FC">
  </a>
</p>


## 📌 Índice

- [📌 Índice](#-índice)
- [📝 Sobre o projeto](#-sobre-o-projeto)
  - [⬆ Requisições](#-requisições)
    - [🏅 Listagem](#-listagem)
  - [⬇ Respostas](#-respostas)
- [✨ Features](#-features)
- [👷 Instalação](#-instalação)
- [📮 FAQ](#-faq)
- [📕 Licença](#-licença)


## 📝 Sobre o projeto

O MyContacts API é um projeto de estudo destinado a colocar em prática o conteúdo aprendido nos módulos de Back-end do Stage One do curso [**JStack**](https://jstack.com.br/), no qual foi abordado diversos assuntos, como:
  * Servidores HTTP e APIs REST;
  * Módulos e pacotes npm;
  * Controllers, Middlewares e Repository Pattern;
  * Manipulação de containers com Docker;
  * Banco de dados SQL e JOINs;
  * Captura e tratativa de erros, e mais.

Trata-se de uma API simples que segue os padrões REST, e permite ao usuário organizar seus **Contatos**, classificando-os por **Categorias**.
  * **Status do projeto**: Concluído ✅
  * **Modelo do Banco de Dados**: [Clique aqui](https://dbdiagram.io/d/61d764a6f8370f0a2edff401)
  * **Ver no Insomnia**: [Clique aqui](https://insomnia.rest/run/?label=MyContacts%20API&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fvilsonsampaio%2Fmycontacts-api%2Fmain%2Finsomnia-schema.json)

### ⬆ Requisições

As requisições (*requests*) para a API devem seguir os seguintes padrões:
| Método | Descrição |
|---|---|
| `GET` | Retorna informações de um ou mais registros. |
| `POST` | Cria um novo registro. |
| `PUT` | Atualiza os dados de um registro. |
| `DELETE` | Remove um registro.

#### 🏅 Listagem
As ações de `listagem` de todos os registros de ambas tabelas permitem o envio dos seguintes parâmetros:

| Parâmetro | Descrição |
|---|---|
| `order` | Filtra a ordem de listagem dos registros, podendo ser ASC (crescente), que é o valor padrão, e DESC (descrescente). |

### ⬇ Respostas

Os *status codes* retornados possuem os seguintes significados:
| Código | Descrição |
|---|---|
| `200` | Requisição executada com sucesso.|
| `204` | Requisição executada com sucesso (*success*), sem retorno de dados.|
| `400` | Registro cadastrado já existe no sistema ou campos obrigatórios não estão inseridos no corpo da requisição.|
| `404` | Registro pesquisado não encontrado.|
| `500` | Erro interno no servidor. |


## ✨ Features
- [x] 📲 Criação, listagem, atualização e remoção de contatos
- [x] 🏷 Criação, listagem, atualização e remoção de categorias


## 👷 Instalação
1. Primeiro, é necessário que você tenha instalado em seu computador o [NodeJS](https://nodejs.org/en/docs/), o [Yarn](https://yarnpkg.com/getting-started) e o [Docker Desktop](https://www.docker.com/get-started). Caso seu Sistema Operacional seja alguma distribuição Linux, será necessário instalar o [Docker Compose](https://docs.docker.com/compose/) para rodar os containers através de um único comando.

2. Tendo os programas listados acima instalados, clone esse repositório: `git clone https://github.com/vilsonsampaio/mycontacts-api.git`.

3. Dentro do diretório do projeto, instale todas as dependências da aplicação: `yarn add`.

4. Clone o arquivo `.env.example` para configurar as variáveis de ambiente: `cp .env.example .env`.

5. Crie o container que irá rodar o banco de dados da aplicação, alimentando-o com suas respectivas tabelas: `docker-compose up -d`.

6. Por fim, execute a aplicação com o comando `yarn dev`, e o servidor já estará funcionado no endereço `http://localhost:3000/`.


## 📮 FAQ
**Pergunta:** Quais foram as tecnologias utilizadas nesse projeto?

**Resposta:** Esse projeto utilizou [NodeJS](https://nodejs.org/) junto ao framework [Express](https://expressjs.com/) para construção do servidor HTTP, além do [Postgres](https://www.postgresql.org/) para o banco de dados, com este rodando em um container [Docker](https://www.docker.com/). Para a IDE, utilizei o [Visual Studio Code](https://code.visualstudio.com/#alt-downloads) com o [Editor Config](https://editorconfig.org/) e [ESLint](https://eslint.org/).


## 📕 Licença

Desenvolvido em 2022.<br />
Este projeto está licenciado sob a [MIT License](https://github.com/vilsonsampaio/mycontacts-api/blob/main/LICENSE).

---

<h4 align="center">
  Feito com 💙 <a href="https://www.linkedin.com/in/vilsonsampaio/" target="_blank">Vilson Sampaio</a>
</h4>
