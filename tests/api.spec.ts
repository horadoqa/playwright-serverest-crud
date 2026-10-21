
import { test, expect } from '@playwright/test';

test.describe('API de usuários - Testes funcionais', () => {
  test('GET /usuarios - consultar lista de usuários', async ({ request }) => {
    const inicio = Date.now();

    const response = await request.get('/usuarios');

    const tempoResposta = Date.now() - inicio;

    expect(response.status()).toBe(200);
    expect(tempoResposta).toBeLessThan(3000);

    const body = await response.json();

    expect(body.quantidade).toEqual(expect.any(Number));
    expect(body.usuarios).toEqual(expect.any(Array));

    expect(body.quantidade).toBe(body.usuarios.length);

    console.log(`Tempo de resposta: ${tempoResposta} ms`);
    console.log(`Total de usuários: ${body.quantidade}`);
  });
});
