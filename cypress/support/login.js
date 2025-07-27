import dados from '../fixtures/variaveis.json';

Cypress.Commands.add('realizarLogin', (usuario) => {
  cy.visit('/');

  cy.get(dados.campoEmailLogin)
    .should('be.visible')
    .type(usuario.email);

  cy.get(dados.campoSenhaLogin)
    .type(usuario.senha);

  cy.get(dados.btnLogin).click();
  // Validação do saldo em conta
  cy.wait(3000);
  
  cy.get(dados.valorConta)
  .should('be.visible')
  .invoke('text')
  .then((textoSaldo) => {
    const valorFormatado = textoSaldo.replace(/\s/g, '').trim(); // remove espaços invisíveis
    expect(valorFormatado).to.include('R$1.000,00');
  });


  // Validação do número da conta
  cy.get(dados.NmrConta) // ou o seletor correspondente
  .should('be.visible')
  .invoke('text')
  .then((textoConta) => {
    const contaNaTela = textoConta.match(/\d+-\d+/)?.[0]; // extrai o padrão '999-9'
    expect(contaNaTela).to.eq(usuario.conta);
  });
});
