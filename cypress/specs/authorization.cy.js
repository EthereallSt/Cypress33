import data from "../support/data";
import app_sauce from "../pages/sauce_page/app_sauce";

describe('Demo sauce e2e check', () => {

  it('Should login to demo sauce', () => {
    app_sauce.loginUI()
    cy.url().should('include', '/inventory.html')

  })

  it('Should add to cart', () => {
    cy.get('.inventory_item').first().find('.btn_inventory').click()

  })

  it('Should proceed to cart', () => {
    cy.get('.shopping_cart_link').click()

  })

  it('Should continue purchase', () => {
    cy.get('.checkout_button').click()

    // Enter the customer information
    cy.get('#first-name').type('Stepan')
    cy.get('#last-name').type('Pok')
    cy.get('#postal-code').type('12345')

    // Continue to the final step
    cy.get('.cart_button').click()

    // Checkout
    cy.get('[data-test="finish"]').click()

    // Verify that the checkout is complete
    cy.get('.complete-header').should('contain.text', 'Thank you for your order!')
  })
})