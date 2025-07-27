🐞 BugBank‑Cypress
Automação de testes end‑to‑end usando Cypress para a aplicação BugBank, um banco web simples com comportamento intencionalmente instável — ideal para treinar cenários reais de teste.

Funcionalidades utilizadas para a automação
Cadastro de usuário com saldo (conta digital)

Geração dinâmica de dados com a biblioteca faker.js

Captura e validação do número da conta gerado

Login com conta cadastrada

Validação de dados pós-login: saldo e número da conta

Realização de transferências entre duas contas criadas em sequência

Reutilização de comandos personalizados (Cypress.Commands.add(...))

Estrutura de testes em fluxo único ou multi-iteração

## 🚀 Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/)
- [Faker.js](https://github.com/Marak/Faker.js/) – para geração de dados fake
- JavaScript (ES6)
- Node.js

---

## 📋 Funcionalidades Automatizadas

- ✅ **Cadastro com saldo**
  - Preenchimento dinâmico de dados de usuário com `faker`
  - Extração do número da conta recém-criada para uso posterior

- ✅ **Login com validações**
  - Verifica se o saldo está correto após o login
  - Valida se o número da conta corresponde ao usuário

- ✅ **Transferência entre contas**
  - Separa número e dígito da conta de destino
  - Realiza a transferência e valida o novo saldo

- ✅ **Fluxo completo**
  - Cria dois usuários
  - Um usuário envia transferência para o outro
  - Ambos os saldos são validados após a transação

---
