# Playwright ServeRest CRUD

Projeto de automação de testes de API utilizando [Playwright](<https://playwright.dev/>) e a [API ServeRest](<https://serverest.dev/>), com foco nas operações CRUD de usuários.

## Objetivo

Praticar automação de testes de API, validando as principais operações de gerenciamento de usuários:

- **Create:** cadastrar um novo usuário.
- **Read:** consultar usuários cadastrados.
- **Update:** atualizar os dados de um usuário.
- **Delete:** excluir um usuário.

## Tecnologias utilizadas

- [Playwright](<https://playwright.dev/>)
- [JavaScript](https://www.w3schools.com/js/)
- [ServeRest API](<https://serverest.dev/>)
- [Node.js](https://nodejs.org/pt-br)

## Instalação

Clone o repositório:

```bash
git clone https://github.com/horadoqa/playwright-serverest-crud.git
```

Acesse a pasta do projeto:

```bash
cd playwright-serverest-crud
```

Instale as dependências:

```bash
npm install
```

## Execução dos testes

```bash
npx playwright test
```

## Cenários de teste

- Cadastro de usuário.
- Consulta de usuário.
- Atualização dos dados de usuário.
- Exclusão de usuário.
- Validação dos status HTTP e das respostas da API.

## Autor

Projeto desenvolvido para fins de estudo e prática de automação de testes de API.
