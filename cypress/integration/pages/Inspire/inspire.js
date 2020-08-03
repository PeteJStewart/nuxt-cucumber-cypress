/* global cy */
import { Given } from 'cypress-cucumber-preprocessor/steps'

Given('I am on the inspire page', () => {
  cy.visit('/inspire')
})

Given('I toggle navigation drawer', () => {
  cy.get('.v-app-bar__nav-icon').click()
})
