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
- JavaScript
- [ServeRest API](<https://serverest.dev/>)
- Node.js

## Instalação

Clone o repositório:

```
git clone <URL_DO_REPOSITORIO>
```

Acesse a pasta do projeto:

```
cd playwright-serverest-crud
```

Instale as dependências:

```
npm install
```

## ▶️ Execução dos testes

```
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
