/**
Get Air pollution from the past on location 
*/
import air_pollution_response from '../../fixtures/air_pollution_response.json';

context('Get Air Pollution the past', () => {
  it('Get Air Pollution - 200', () => {
    cy.request({
      method: 'GET',
      url: `${Cypress.env(
        'URL'
      )}air_pollution/history?lat=51.5074&lon=0.1278&start=1606223802&end=1606482999&appid=${Cypress.env(
        'APP_ID'
      )}`,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.isOkStatusCode).to.eq(true);
      expect(response.statusText).to.eq('OK');
      expect(response.body).to.deep.equal(air_pollution_response);
    });
  });

  it('Get Air Pollution - Invalid latitude - 400', () => {
    cy.request({
      method: 'GET',
      url: `${Cypress.env(
        'URL'
      )}air_pollution/history?lat=Invalid&lon=0.1278&start=1606223802&end=1606482999&appid=${Cypress.env(
        'APP_ID'
      )}`,
      failOnStatusCode: false,
    }).then((response) => {
      console.log(response);
      expect(response.status).to.eq(400);
      expect(response.body.message).to.eq('wrong latitude');
      expect(response.isOkStatusCode).to.eq(false);
      expect(response.statusText).to.eq('Bad Request');
    });
  });

  it('Get Air Pollution - Invalid longitude - 400', () => {
    cy.request({
      method: 'GET',
      url: `${Cypress.env(
        'URL'
      )}air_pollution/history?lat=51.5074&lon=Invalid&start=1606223802&end=1606482999&appid=${Cypress.env(
        'APP_ID'
      )}`,
      failOnStatusCode: false,
    }).then((response) => {
      console.log(response);
      expect(response.status).to.eq(400);
      expect(response.body.message).to.eq('wrong longitude');
      expect(response.isOkStatusCode).to.eq(false);
      expect(response.statusText).to.eq('Bad Request');
    });
  });

  it('Get Air Pollution - Invalid start time - 400', () => {
    cy.request({
      method: 'GET',
      url: `${Cypress.env(
        'URL'
      )}air_pollution/history?lat=51.5074&lon=0.1278&start=Invalid&end=1606482999&appid=${Cypress.env(
        'APP_ID'
      )}`,
      failOnStatusCode: false,
    }).then((response) => {
      console.log(response);
      expect(response.status).to.eq(400);
      expect(response.body.message).to.eq('wrong start time');
      expect(response.isOkStatusCode).to.eq(false);
      expect(response.statusText).to.eq('Bad Request');
    });
  });

  it('Get Air Pollution - Invalid end time - 400', () => {
    cy.request({
      method: 'GET',
      url: `${Cypress.env(
        'URL'
      )}air_pollution/history?lat=51.5074&lon=0.1278&start=1606223802&end=Invalid&appid=${Cypress.env(
        'APP_ID'
      )}`,
      failOnStatusCode: false,
    }).then((response) => {
      console.log(response);
      expect(response.status).to.eq(400);
      expect(response.body.message).to.eq('wrong end time');
      expect(response.isOkStatusCode).to.eq(false);
      expect(response.statusText).to.eq('Bad Request');
    });
  });

  it('Get Air Pollution - No Location -  400', () => {
    cy.request({
      method: 'GET',
      url: `${Cypress.env(
        'URL'
      )}air_pollution/history?&start=1606223802&end=Invalid&appid=${Cypress.env(
        'APP_ID'
      )}`,
      failOnStatusCode: false,
    }).then((response) => {
      console.log(response);
      expect(response.status).to.eq(400);
      expect(response.body.message).to.eq('Nothing to geocode');
      expect(response.isOkStatusCode).to.eq(false);
      expect(response.statusText).to.eq('Bad Request');
    });
  });

  it('Get Air Pollution - No Time -  400', () => {
    cy.request({
      method: 'GET',
      url: `${Cypress.env(
        'URL'
      )}air_pollution/history?lat=51.5074&lon=0.1278&appid=${Cypress.env(
        'APP_ID'
      )}`,
      failOnStatusCode: false,
    }).then((response) => {
      console.log(response);
      expect(response.status).to.eq(400);
      expect(response.body.message).to.eq('no location or time specified');
      expect(response.isOkStatusCode).to.eq(false);
      expect(response.statusText).to.eq('Bad Request');
    });
  });

  it('Get Air Pollution - Invalid APP ID -  401', () => {
    cy.request({
      method: 'GET',
      url: `${Cypress.env(
        'URL'
      )}air_pollution/history?lat=51.5074&lon=0.1278&appid=Invalid`,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(401);
      expect(response.body.message).to.eq(
        'Invalid API key. Please see http://openweathermap.org/faq#error401 for more info.'
      );
      expect(response.isOkStatusCode).to.eq(false);
      expect(response.statusText).to.eq('Unauthorized');
    });
  });
});
