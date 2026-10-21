# Instalação

Para instalar o Playwright no seu projeto `playwright-serverest-crud`, execute estes comandos no terminal, dentro da pasta do repositório.

## 1. Inicialize o projeto Node.js


```bash
npm init -y
```

## 2. Instale o Playwright Test


```bash
npm init playwright@latest

✔ Success! Created a Playwright Test project at /home/horadoqa/projetos/playwright-serverest-crud

Inside that directory, you can run several commands:

  npx playwright test
    Runs the end-to-end tests.

  npx playwright test --ui
    Starts the interactive UI mode.

  npx playwright test --project=chromium
    Runs the tests only on Desktop Chrome.

  npx playwright test example
    Runs the tests in a specific file.

  npx playwright test --debug
    Runs the tests in debug mode.

  npx playwright codegen
    Auto generate tests with Codegen.

We suggest that you begin by typing:

    npx playwright test

And check out the following files:
  - ./tests/example.spec.ts - Example end-to-end test
  - ./playwright.config.ts - Playwright Test configuration

Visit https://playwright.dev/docs/intro for more information. ✨

Happy hacking! 🎭
```

Esse comando inicia o assistente de configuração do Playwright, que permite selecionar JavaScript, TypeScript e outras opções.

Se quiser instalar apenas o pacote de testes diretamente:


```bash
npm install -D @playwright/test
```

## 3. Instale os navegadores (se necessário)


```bash
npx playwright install
```

## 4. Script default da instalação

```TypeScript
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
```

# 5. Execute o teste

```bash
npx playwright test

Running 6 tests using 4 workers
  6 passed (7.1s)

To open last HTML report run:

  npx playwright show-report
```

Importante para o seu projeto: como você vai testar a API ServeRest, pode utilizar o `request` do Playwright para fazer requisições HTTP sem precisar abrir um navegador.

Exemplo de teste:

### Com Javascript `api.spec.ts` 

```JavaScript
const { test, expect } = require('@playwright/test');

test('Consultar usuários na ServeRest', async ({ request }) => {
  const response = await request.get('https://serverest.dev/usuarios');

  expect(response.status()).toBe(200);
});
```

### Com TypeScript

```TypeScript
import { test, expect } from '@playwright/test';

test('Consultar usuários na ServeRest', async ({ request }) => {
  const response = await request.get('https://serverest.dev/usuarios');

  expect(response.status()).toBe(200);
});
```

Esse teste já valida se a API retorna o status HTTP `200` ao consultar os usuários.