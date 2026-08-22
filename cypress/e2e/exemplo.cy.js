describe('Teste EBAC com Cypress', () => {
  it('deve acessar a página de exemplo do Cypress', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('Kitchen Sink').should('be.visible')
  })
})
