// 
Cypress.Commands.add('loadRockets', (version, category) => {
  cy.intercept(`https://api.spacexdata.com/${version}/${category}`, {
    body: [
      {
        "height": {
          "feet": 73
        },
        "diameter": {
          "feet": 5.5
        },
        "mass": {
          "lb": 66460
        },   
          "flickr_images": [
            "https://imgur.com/DaCfMsj.jpg",
            "https://imgur.com/azYafd8.jpg"
        ],
        "name": "Falcon 1",
        "cost_per_launch": 6700000,
        "first_flight": "2006-03-24",
        "wikipedia": "https://en.wikipedia.org/wiki/Falcon_1",
        "description": "The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.",
        "id": "5e9d0d95eda69955f709d1eb"
      },
      {
        "height": {
          "feet": 229.6
        },
        "diameter": {
          "feet": 12
        },
        "mass": {
          "lb": 1207920
        },   
          "flickr_images": [
            "https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg",
            "https://farm4.staticflickr.com/3955/32915197674_eee74d81bb_b.jpg"
        ],
        "name": "Falcon 9",
        "cost_per_launch": 50000000,
        "first_flight": "2010-06-04",
        "wikipedia": "https://en.wikipedia.org/wiki/Falcon_9",
        "description": "Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.",
        "id": "5e9d0d95eda69973a809d1ec"
      },
    ]
  })
})

Cypress.Commands.add('loadArticles', (version, category) => {
  cy.intercept(`https://api.spacexdata.com/${version}/${category}`, {
    body: [
      {
        "title": "Falcon reaches Earth orbit",
        "details": "Falcon 1 becomes the first privately developed liquid-fuel rocket to reach Earth orbit",
        "links": {
          "article": "http://www.spacex.com/news/2013/02/11/flight-4-launch-update-0"
        }
      },
      {
        "title": "Falcon delivers payload to orbit",
        "details": "Fifth successful flight of Falcon makes history, becoming the first privately developed liquid-fuel rocket to deliver a commercial satellite to orbit",
        "links": {
          "article": "http://www.spacex.com/news/2013/02/11/flight-4-launch-update-0"
        }
      }
    ]
  })
})

Cypress.Commands.add('loadImages', (version, category) => {
  
})
//***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
