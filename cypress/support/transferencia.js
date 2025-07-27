import dados from '../fixtures/variaveis.json';

Cypress.Commands.add('realizarTransferenciaParaConta2', (usuario) => {
  cy.get(dados.btnTransferencia).click();

  const [numeroConta, digitoConta] = usuario.conta.split('-');

  cy.get(dados.campoNmrConta).type(numeroConta);
  cy.get(dados.campoDigito).type(digitoConta);
  cy.get(dados.campoValorTransferencia).type("500");
  cy.get(dados.btnTranserir).click();
  cy.get(dados.btnFecharModal).click();
  cy.get(dados.btnVoltar).click();

  cy.get(dados.valorConta)
  .should('be.visible')
  .invoke('text')
  .then((textoSaldo) => {
    const valorFormatado = textoSaldo.replace(/\s/g, '').trim(); // remove espaços invisíveis
    expect(valorFormatado).to.include('R$500,00');
  });

  cy.get(dados.btnSair).click();
});

