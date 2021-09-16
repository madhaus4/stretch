describe('Dashboard Page View', () => {
  beforeEach(() => {
    cy.loadArticles('v4', 'history')
    cy.loadImages('v5', 'launches')
    cy.visit('http://localhost:3000')
  })

  it('Should display a header', () => {
    cy.get('nav').should('be.visible').should('have.class', 'nav-bar')
  })

  it('Should cointain working links to navigate from the dashbaord to the rocket page', () => {
    cy.get('.rockets-link').click().get('.rocket-card').first().should('be.visible')
    .get('.history-link').click().get('.articles-wrapper').should('be.visible')      
  })

  it('Should display a header in the articles section', () => {
    cy.get('h2').should('contain', 'Recommended For You')
  })

  it('Should render the available article previews with picture, header, description, and link', () => {
    cy.get('.articles-wrapper > :nth-child(1)').should('be.visible')
      .get(':nth-child(1) > .info-wrapper > h3').should('contain', 'First successfull Dragon launch')
      .get(':nth-child(1) > .info-wrapper > .article-details').should('contain', 'SpaceX becomes the first private company to successfully launch, orbit, and recover a spacecraft.')
      .get(':nth-child(1) > .info-wrapper > a').should('have.attr', 'href').and('include', 'http://www.bbc.com/news/10209704')
  })

})