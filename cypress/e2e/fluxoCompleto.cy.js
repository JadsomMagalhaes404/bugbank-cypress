describe('Fluxo completo em uma única execução', () => {
  it('Deve cadastrar duas contas e fazer login com a primeira', () => {
    let conta1 = {};
    let conta2 = {};

    // Cadastro da conta 1
    cy.realizarCadastroComSaldo();
    cy.get('@usuarioCadastrado').then((dados1) => {
      conta1 = dados1;

    // Cadastro da conta 2
    cy.realizarCadastroComSaldo();
    cy.get('@usuarioCadastrado').then((dados2) => {
      conta2 = dados2;

    // Login com a conta 1 (sem reload!)
    cy.realizarLogin(conta1);

    cy.realizarTransferenciaParaConta2(conta2);

    cy.realizarLoginDois(conta2);

    });
  });  
});
});
