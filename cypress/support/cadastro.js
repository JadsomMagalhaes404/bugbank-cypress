import dados from '../fixtures/variaveis.json'
import { gerarUsuario } from '../utils/gerarUsuario'

Cypress.Commands.add('realizarCadastroComSaldo', () => {
    const usuario = gerarUsuario();
    
    cy.visit("/");
    cy.get(dados.btnRegistro).should('contain.text', 'Registrar').should('be.visible').click();

    cy.get(dados.campoEmail).type(usuario.email, { force: true });
    cy.get(dados.campoNome).type(usuario.nome, { force: true });
    cy.get(dados.campoSenha).type(usuario.senha, { force: true });
    cy.get(dados.campoConfirmSenha).type(usuario.confirmarSenha, { force: true });
    cy.get(dados.switchSaldo).click({ force: true });
    cy.get(dados.btnCadastrar).click({ force: true });


})