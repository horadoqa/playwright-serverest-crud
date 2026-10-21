
import { test, expect } from '@playwright/test';

const usuario = {
  nome: 'Hora do QA',
  email: 'horadoqa@qa.com.br',
  password: '1q2w3e4r',
  administrador: 'true',
};

test.describe('CRUD de usuários - ServeRest', () => {

  test.describe.configure({ mode: 'serial' });
  
  let usuarioId: string;

  test('1. Create - cadastrar usuário', async ({ request }) => {
    const response = await request.post('/usuarios', {
      data: usuario,
    });

    expect(response.status()).toBe(201);

    const body = await response.json();

    expect(body.message).toBe('Cadastro realizado com sucesso');
    expect(body._id).toBeTruthy();

    // Salva o ID para utilizar nos próximos testes.
    usuarioId = body._id;
  });

  test('2. Read - consultar usuário criado', async ({ request }) => {
    expect(usuarioId).toBeTruthy();

    const response = await request.get(`/usuarios/${usuarioId}`);

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body).toMatchObject({
      nome: usuario.nome,
      email: usuario.email,
      password: usuario.password,
      administrador: usuario.administrador,
    });
  });

  test('3. Login - autenticar usuário', async ({ request }) => {
    const response = await request.post('/login', {
      data: {
        email: usuario.email,
        password: usuario.password,
      },
    });

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.message).toBe('Login realizado com sucesso');
    expect(body.authorization).toBeTruthy();
    expect(body.authorization).toMatch(/^Bearer\s+\S+/);
  });

  test('4. Update - atualizar nome do usuário', async ({ request }) => {
    const response = await request.put(`/usuarios/${usuarioId}`, {
      data: {
        ...usuario,
        nome: 'Hora do QA Atualizado',
      },
    });

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.message).toBe('Registro alterado com sucesso');

    // Confirma a alteração consultando novamente o usuário.
    const consulta = await request.get(`/usuarios/${usuarioId}`);

    expect(consulta.status()).toBe(200);

    const usuarioAtualizado = await consulta.json();

    expect(usuarioAtualizado.nome).toBe('Hora do QA Atualizado');
  });

  test('5. Delete - excluir usuário criado', async ({ request }) => {
    const response = await request.delete(`/usuarios/${usuarioId}`);

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.message).toBe('Registro excluído com sucesso');

    // Confirma que o usuário não existe mais.
    const consulta = await request.get(`/usuarios/${usuarioId}`);

    expect(consulta.status()).toBe(400);

    const bodyConsulta = await consulta.json();

    expect(bodyConsulta.message).toBe('Usuário não encontrado');
  });
});
