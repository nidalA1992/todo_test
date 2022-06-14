import { ceil } from "cypress/types/lodash";

describe('TODOs', () => {
  it('should visit', () => {
    cy
      .visit('http://localhost:8000');
    cy
      .title()
      .should('eq','TODOs');
  });

  it('should add new todos', () => {
   for(let i = 0; i < 5; i++) {
    cy
      .get('form')
      .type(`todo ${i+1}`)
      .get('[class*="submit"]')
      .click();
    cy
      .get('[class*="label"]')
      .contains(`todo ${i+1}`);
   }
   todoCounterShouldEqual(5);
    
  });

  it('todo 1 and todo 2 should completed', () => {
    cy
      .get('[class*="label"]').each((item, index) => {
        if (index < 2) 
          item.click();
        if (index < 2) 
          expect(item.children()[0]).to.be.checked;
      });
    todoCounterShouldEqual(3);
  });

  it('select "Active" todo list', () => {
    clickOn('Active');
    expectAmount(3);
  });

  it('select "Completed" todo list', () => {
    clickOn('Completed');
    expectAmount(2);
  });
  
  it('select "All" todo list', () => {
    clickOn('All');
    expectAmount(5);
  });

  it('use "Clear completed"', () => {
    clickOn('Clear completed');
    expectAmount(3);
    clickOn('Completed'); 
    expectAmount(0);
  });

  it('should delete one todo', () => {
    clickOn('All');
    cy.get('[class*="delButton"]')
      .first()
      .click();
    expectAmount(2);
  });
})

function clickOn(filter: string) {
  return cy.contains(filter).click();
}

function expectAmount(amount: number) {
  cy.get('label').should(($label) => {
    expect($label).to.have.length(amount);
  })
}

function todoCounterShouldEqual(num: string | number) {
  cy
    .get('#todoCounter')
    .contains(`${num}`);
}
