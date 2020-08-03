/* global cy */
import { Then } from 'cypress-cucumber-preprocessor/steps'

Then(`{string} text should be visible`, (string) => {
  cy.contains(string).should('be.visible')
})
