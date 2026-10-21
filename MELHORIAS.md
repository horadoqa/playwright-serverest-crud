# Melhorias recomendadas para o projeto

O projeto `playwright-serverest-crud` já possui uma boa base: CRUD de usuários, autenticação, testes de contrato e validações de API com Playwright e TypeScript.

Para evoluí-lo e deixá-lo mais próximo de um projeto profissional de QA Automation, eu organizaria as melhorias por prioridade.

## 1. Configuração e dados de teste

1. Centralizar configurações

Prioridade altaRemover URLs, credenciais e outros valores fixos dos testes, centralizando-os em arquivos de configuração e variáveis de ambiente.

Arquivos sugeridos:

- `playwright.config.ts`
- `.env`
- `.env.example`
- `src/config/env.ts`

Benefício: facilita alternar entre ambientes e evita espalhar configurações pelo código.

2. Implementar Faker

Prioridade altaUtilizar `@faker-js/faker` para gerar nomes, e-mails e outros dados dinâmicos nos testes de cadastro.


```bash
npm install -D @faker-js/faker
```

Benefício: reduz conflitos de e-mail duplicado e melhora a reutilização dos testes.

3. Criar massa de dados e tipos TypeScript

Separar dados, interfaces e funções auxiliares dos arquivos de teste.

Estrutura sugerida:

- `src/factories/usuario.factory.ts`
- `src/types/usuario.ts`
- `src/fixtures/`

Benefício: testes mais legíveis, reutilizáveis e fáceis de manter.

## 2. Relatórios e diagnóstico

4. Integrar o Allure Report

Prioridade altaGerar relatórios detalhados com resultados, duração dos testes, etapas executadas e evidências de falhas.

```bash
npm install -D allure-playwright
```

Depois, configurar o reporter no Playwright e instalar o Allure Commandline para gerar e abrir o relatório.

Benefício: facilita a análise dos resultados e melhora a apresentação do projeto no portfólio.

5. Melhorar evidências de falhas

Configurar traces, logs e relatórios para facilitar a investigação de erros. Para API, registrar método, endpoint, status e informações relevantes da resposta, evitando expor senhas ou tokens.

Benefício: reduz o tempo necessário para identificar a causa de uma falha.

## 3. Arquitetura e qualidade dos testes

- 6. Criar funções auxiliares para API: centralizar operações repetidas em arquivos como `usuarios.service.ts`, sem esconder as asserções importantes dos testes.
- 7. Implementar fixtures do Playwright: reaproveitar configuração, autenticação e preparação de dados.
- 8. Reforçar os testes negativos: validar e-mail duplicado, campos obrigatórios ausentes, credenciais inválidas, ID inexistente e dados inválidos.
- 9. Melhorar os testes de contrato: usar JSON Schema com Ajv para validar estrutura, propriedades obrigatórias, tipos e regras dos campos.
- 10. Isolar os testes: cada cenário deve preparar seus próprios dados e limpar o que criou, sem depender da ordem de execução.
- 11. Usar tipagem forte: definir interfaces para usuários, login e respostas da API, evitando o uso indiscriminado de `any`.

## 4. CI/CD e automação

12. Configurar GitHub Actions

Executar os testes automaticamente a cada `push` e `pull request`.

Benefício: detectar regressões sem depender da execução manual.

13. Criar scripts npm

Padronizar os comandos no `package.json`, por exemplo:


```json
{
  "scripts": {
    "test": "playwright test",
    "test:api": "playwright test tests/api",
    "test:crud": "playwright test tests/usuarios-crud.spec.ts",
    "test:contract": "playwright test tests/usuarios-contrato.spec.ts",
    "test:report": "allure generate allure-results --clean -o allure-report"
  }
}
```

Ajuste os caminhos conforme a estrutura real do repositório.

14. Documentar o projeto no README

Incluir pré-requisitos, instalação, configuração, comandos de execução, estrutura de pastas, exemplos de relatórios e tecnologias utilizadas.

## 5. Estrutura de pastas sugerida

Uma possível organização para acomodar essas melhorias:

```bash
playwright-serverest-crud/
├── tests/
│   ├── api.spec.ts
│   ├── usuarios-crud.spec.ts
│   └── usuarios-contrato.spec.ts
├── src/
│   ├── config/
│   │   └── env.ts
│   ├── factories/
│   │   └── usuario.factory.ts
│   ├── services/
│   │   └── usuarios.service.ts
│   ├── fixtures/
│   └── types/
│       └── usuario.ts
├── .github/
│   └── workflows/
│       └── tests.yml
├── .env.example
├── .gitignore
├── package.json
├── playwright.config.ts
└── README.md
```

Essa estrutura é uma sugestão: não é necessário criar todas as pastas de imediato. Comece separando apenas o que já tem responsabilidade clara.

## 6. Checklist de implementação

Marque as melhorias conforme avançar no projeto.

### Plano de evolução

0 de 9

[ ] Centralizar URL e configurações - Essencial

[ ] Adicionar Faker para dados dinâmicos - Essencial

[ ] Criar interfaces TypeScript - Essencial

[ ] Garantir independência dos testes - Essencial

[ ] Integrar Allure Report - Relatórios

[ ] Adicionar testes negativos - Cobertura

[ ] Validar contratos com JSON Schema - Cobertura

[ ] Configurar GitHub ActionsCI/CD

[ ] Documentar instalação e execução - Documentação

## Minha recomendação de prioridade

Eu implementaria nesta ordem:

1. Configuração centralizada + Faker — elimina dados fixos e facilita a manutenção.
2. Tipagem forte + isolamento dos testes — melhora a confiabilidade da suíte.
3. Allure Report — dá visibilidade aos resultados.
4. Testes negativos + contratos com JSON Schema — amplia a cobertura de qualidade.
5. GitHub Actions + README — automatiza a execução e apresenta o projeto de forma profissional.

> [!CAUTION]
> Um cuidado importante: use Faker para gerar dados únicos, mas mantenha os dados previsíveis nos testes de contrato quando isso ajudar na reprodução de falhas. E lembre-se de que `.env` deve ficar no `.gitignore`; publique somente o `.env.example`, sem credenciais reais.

