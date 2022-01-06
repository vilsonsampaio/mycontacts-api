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


## 📌 Tabela de conteúdos

* [Sobre o projeto](#)
  * [Requisições](#)
    * [Listagem]()
  * [Respostas](#)
* [Features](#)
* [Instalação](#)


## 📝 Sobre o projeto

O MyContacts API é um projeto de estudo destinado a colocar em prática o conteúdo que foi aprendido durante o curso [**JStack**](https://jstack.com.br/), mais especificamente, no módulo **NodeJS e Express**.

Trata-se de uma API que segue os padrões REST, e permite o acesso aos recursos **Contatos** e **Categorias**.
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


## :rocket: Features
- [x] 📲 Criação, listagem, atualização e remoção de contatos
- [x] 🏷 Criação, listagem, atualização e remoção de categorias


## :construction_worker: Instalação
1. Primeiro, é necessário que você tenha instalado em seu computador o [NodeJS](https://nodejs.org/en/docs/), o [Yarn](https://yarnpkg.com/getting-started) e o [Docker Desktop](https://www.docker.com/get-started).

2. Após a instalação dos programas, clone esse repositório: `git clone https://github.com/vilsonsampaio/mycontacts-api.git`.

3. Dentro do diretório do projeto, instale todas as dependências da aplicação: `yarn add`.

4. Para subir o banco de dados da aplicação, em outro terminal, baixe a imagem do Postgres pelo Docker: `docker pull postgres`.

5.  Após baixada a imagem, crie o container que irá rodar o banco de dados: `docker run --name pg -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -p 5432:5432 -d postgres`.

6.  Depois de criado, acesse-o: `docker exec -it pg bash`.

7.  Dentro do container, conecte-se ao Postgres: `psql -U root`.

8.  Logado ao banco, crie a database da aplicação com a primeira query presente no arquivo `src/database/schema.sql`: `CREATE DATABASE mycontacts;`. Depois disso, acesse a database recém criada: `\c mycontacts`.

9.  Por fim, dentro da database da aplicação, copie todos os comandos restantes do arquivo `schema.sql`, para criar as tabelas da aplicação.

10. Tudo pronto? Agora é só rodar a aplicação com o comando `yarn dev` que o servidor já estará funcionado no endereço `http://localhost:300/`.


## 📮 FAQ
**Pergunta:** Quais foram as tecnologias utilizadas nesse projeto?

**Resposta:** Esse projeto utilizou [NodeJS](https://nodejs.org/) junto ao framework [Express](https://expressjs.com/) para construção do servidor HTTP, além do [Postgres](https://www.postgresql.org/), rodando em um container [Docker](https://www.docker.com/), para o banco de dados. Para a IDE, utilizei o [Visual Studio Code](https://code.visualstudio.com/#alt-downloads) com o [Editor Config](https://editorconfig.org/) e [ESLint](https://eslint.org/).


# :closed_book: License

Lançado em jan/2022.
Este projeto está licenciado sob a [MIT License](https://github.com/vilsonsampaio/mycontacts-api/blob/main/LICENSE).

---

<h4 align="center">
  Feito com 💙 <a href="https://www.linkedin.com/in/vilsonsampaio/" target="_blank">Vilson Sampaio</a>
</h4>
