import { createOutputSpy, mount } from 'cypress/angular';
import { PanelComponent } from './panel.component';

describe("<Panel />", () => {
  it('should display title', function () {
    mount(PanelComponent, {
      componentProperties: {
        title: 'Hello'
      },
    })

    cy.contains('Hello').should('be.visible')
  });

  it('should display content when the component is mount', function () {
    const content = 'lorem ipsum...'
    mount(`<app-panel title="Another">${content}</app-panel>`, {
      imports: [PanelComponent]
    })

    cy.contains(content).should('be.visible')
  })

  it('should hide children when title bar is clicked', function () {
    mount(`<app-panel title="hello">lorem...</app-panel>`, {
      imports: [PanelComponent]
    })

    cy.contains('hello').click()
    cy.contains('lorem...').should('not.exist')
  })

  it('should toggle children when title bar is clicked twice', function () {
    mount(`<app-panel title="hello">lorem...</app-panel>`, {
      imports: [PanelComponent]
    })

    cy.contains('hello').click()
    cy.contains('hello').click()
    cy.contains('lorem...').should('exist')
  })

  it('should display an icon in the title bar', function () {
    mount(PanelComponent, {
      componentProperties: {
        title: 'hello',
        icon: '\u{1F44D}'
      }
    })

    cy.contains('\u{1F44D}')
  })

  it('should emit an event when icon is clicked', function () {
    mount(PanelComponent, {
      componentProperties: {
        title: 'hello',
        icon: '\u{1F44D}',
        iconClick: createOutputSpy('iconClickSpy')
      }
    })

    cy.contains('\u{1F44D}').click()
    cy.get('@iconClickSpy').should('have.been.calledOnce')
  })

  it('should not toggle the title bar when the icon is clicked', function () {
    mount(`<app-panel title="hello" icon="♥️">lorem...</app-panel>`, {
      imports: [PanelComponent]
    })

    cy.contains('♥️').click()
    cy.contains('lorem...').should('be.visible')
  })

  it('should hide content if the open property is set to false', function () {
    mount(`<app-panel title="hello" icon="♥️" [isOpen]="false">lorem...</app-panel>`, {
      imports: [PanelComponent]
    })
    cy.contains('lorem...').should('not.exist')
  })
  it('should show content if the open property is set to true', function () {
    mount(`<app-panel title="hello" icon="♥️" [isOpen]="true">lorem...</app-panel>`, {
      imports: [PanelComponent]
    })
    cy.contains('lorem...').should('exist')
  })

})
