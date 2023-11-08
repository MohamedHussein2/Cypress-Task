describe('Check Update Shopping Cart Functionality', () => {
  it('passes', () => {
    cy.visit('https://academybugs.com/find-bugs/#')
    cy.get('#ec_add_to_cart_5').click()
    cy.get('.ec_product_added_to_cart > a').click() 
    cy.get('.ec_plus').dblclick()
    cy.contains('UPDATE').click()
    cy.get('.ec_quantity').invoke('val').should('have.value',3)
    cy.wait(5000)
    cy.get('#popmake-4406 > .pum-content > .card-content').click({force: true})
  })
})

describe('Check Empty Shopping Cart Functionality', () => {
  it('passes', () => {
    cy.visit('https://academybugs.com/find-bugs/#')
    cy.get('#ec_add_to_cart_5').click()
    cy.get('.ec_product_added_to_cart > a').click()
    cy.wait(4000)
    cy.get('.ec_cartitem_delete').click()
    cy.get('.ec_cart_empty_button')
      .should('have.text', 'RETURN TO STORE')
  })
})

describe('Check Change Currency Functionality', () => {
  it('passes', () => {
    cy.visit('https://academybugs.com/find-bugs/#')
    cy.get('#ec_add_to_cart_5').click()
    cy.get('.ec_product_added_to_cart > a').click() 
    cy.get('#ec_currency_conversion').select('EUR')
    cy.wait(5000) //for debugging 
  })
})

describe('Check that user can make order', () => {
  it('passes', () => {
    cy.visit('https://academybugs.com/find-bugs/#')
    cy.get('#ec_add_to_cart_5').click()
    cy.get('.ec_product_added_to_cart > a').click()
    cy.get(':nth-child(8) > .ec_cart_button').click()
    cy.get('#ec_cart_billing_country').select('Netherlands')
    cy.get('#ec_cart_billing_first_name').type('Mohamed')
    cy.get('#ec_cart_billing_last_name').type('Abdalla')
    cy.get('#ec_cart_billing_company_name').type('Dyflexis')
    cy.get('#ec_cart_billing_address').type('Mandemankerssteeg 11')
    cy.get('#ec_cart_billing_city').type('Leiden')
    cy.get('#ec_cart_billing_state').type('South Holland')
    cy.get('#ec_cart_billing_zip').type('2311ED')
    cy.get('#ec_cart_billing_phone').type('0665498745')
    cy.get('#ec_contact_email').type('Mohamedhussien6758@gmail.com')
    cy.get('#ec_contact_email_retype').type('Mohamedhussien6758@gmail.com')
    cy.get('.ec_cart_button_row.ec_show_two_column_only > .ec_cart_button').click()
    cy.get(':nth-child(3) > .no_wrap').click()
    cy.get(':nth-child(19) > .ec_cart_button').click()
    cy.get('.ec_cart_left > :nth-child(1)').should('have.text', 'PAYMENT METHOD')
    cy.get('#ec_cart_submit_order').click()
  })
})