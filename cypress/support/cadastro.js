import { gerarUsuario } from '../utils/gerarUsuario';
import dados from '../fixtures/variaveis.json';

Cypress.Commands.add('realizarCadastroComSaldo', () => {
  const usuario = gerarUsuario();

  cy.visit('/');
  cy.get(dados.btnRegistro).should('contain.text', 'Registrar').click();

  cy.get(dados.campoEmail).type(usuario.email, { force: true });
  cy.get(dados.campoNome).type(usuario.nome, { force: true });
  cy.get(dados.campoSenha).type(usuario.senha, { force: true });
  cy.get(dados.campoConfirmSenha).type(usuario.senha, { force: true });

  cy.get(dados.switchSaldo).click({ force: true });
  cy.get(dados.btnCadastrar).click({ force: true });

  cy.get('.styles__ContainerContent-sc-8zteav-1')
    .should('be.visible')
    .invoke('text')
    .then((texto) => {
      const regex = /conta (\d+-\d+)/;
      const match = regex.exec(texto);
      const numeroConta = match ? match[1] : null;

      expect(numeroConta).to.not.be.null;

      // Salva os dados temporariamente na memória
      cy.wrap({
        conta: numeroConta,
        email: usuario.email,
        nome: usuario.nome,
        senha: usuario.senha,
      }).as('usuarioCadastrado');
    });

  cy.get(dados.btnFecharModal).click();
});
