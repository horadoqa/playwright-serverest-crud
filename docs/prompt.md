Crie o script com typescript para o playwright com um CRUD com esses dados

API

import { test, expect } from '@playwright/test';

test('Consultar usuários na ServeRest', async ({ request }) => {
  const response = await request.get('https://serverest.dev/usuarios');

  expect(response.status()).toBe(200);
});

Create
{
            "nome": "Hora do QA",
            "email": "horadoqa@qa.com.br",
            "password": "1q2w3e4r",
            "administrador": "true"
        }

Login -  "email": "horadoqa@qa.com.br",  "password": "1q2w3e4r",

Update - "nome": "Hora do QA Atualizado",

Delete (tem que salvar o ID na criação para usar aqui)

Tem que ter o teste de contrato 