
import { test, expect } from '@playwright/test';

test.describe('Contrato da API - Usuários', () => {
  test('GET /usuarios - validar estrutura e tipos', async ({ request }) => {
    const response = await request.get('/usuarios');

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body).toEqual({
      quantidade: expect.any(Number),
      usuarios: expect.any(Array),
    });

    expect(body.quantidade).toBeGreaterThanOrEqual(0);
    expect(body.quantidade).toBe(body.usuarios.length);

    for (const usuario of body.usuarios) {
      expect(usuario).toEqual(
        expect.objectContaining({
          _id: expect.any(String),
          nome: expect.any(String),
          email: expect.any(String),
          password: expect.any(String),
          administrador: expect.stringMatching(/^(true|false)$/),
        }),
      );
    }
  });

  test('GET /usuarios/:id - validar contrato individual', async ({ request }) => {
    const listaResponse = await request.get('/usuarios');

    expect(listaResponse.status()).toBe(200);

    const lista = await listaResponse.json();

    test.skip(
      lista.usuarios.length === 0,
      'Não existem usuários cadastrados para validar o contrato.',
    );

    const id = lista.usuarios[0]._id;

    const response = await request.get(`/usuarios/${id}`);

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body).toEqual(
      expect.objectContaining({
        nome: expect.any(String),
        email: expect.any(String),
        password: expect.any(String),
        administrador: expect.stringMatching(/^(true|false)$/),
      }),
    );
  });
});
