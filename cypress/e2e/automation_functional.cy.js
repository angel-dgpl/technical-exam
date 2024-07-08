import {elements} from '/cypress/support/element_locators.js'

describe('Automation - Functional Testing', () => {
    beforeEach(() => {
      cy.visit('https://josephyap9.wixsite.com/qaetestsite')
    })
  
    it('Scenario 1: Successful webform submission', () => {
      cy.get(elements.name).type('Test Name')
      cy.get(elements.email).type('test_emal@gmail.com')
      cy.get(elements.position).select('QAE')
      cy.get(elements.phone).type('09123456789')
      cy.get(elements.date).click()
      cy.get(elements.select_date).click()
      cy.get(elements.expected_salary).type('10000')
      cy.get(elements.yrs_exp).contains('> 2 Years < 5 Years').click()
      cy.get(elements.skills).contains('Manual Testing').click()
      cy.get(elements.submit_btn).contains('Submit').should('be.visible').click()
    })
  
    it('Scenario 2: Submit the form without filling in the non-required fields', () => {
      cy.get(elements.name).type('Test Name')
      cy.get(elements.email).type('test_emal@gmail.com')
      cy.get(elements.position).select('QAE')
      cy.get(elements.date).click()
      cy.get(elements.select_date).click()
      cy.get(elements.skills).contains('Manual Testing').click()
      cy.get(elements.submit_btn).contains('Submit').should('be.visible').click()
    })
  })
  