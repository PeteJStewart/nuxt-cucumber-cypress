/* global cy */
import { Then } from 'cypress-cucumber-preprocessor/steps'

Then(`page contains {string}`, (string) => {
  cy.contains(string)
})
