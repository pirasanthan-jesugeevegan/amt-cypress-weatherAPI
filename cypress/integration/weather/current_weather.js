/**
Get Current weather 
*/

/// <reference types="cypress" />

context('Get Current Weather', () => {
  it('Get weather data for a location - 200', () => {
    cy.request({
      method: 'GET',
      url: `${Cypress.env('URL')}weather?q=${Cypress.env(
        'LOCATION'
      )}&appid=${Cypress.env('APP_ID')}`,
    }).then((response) => {
      console.log(response);
      expect(response.status).to.eq(200);
      expect(response.isOkStatusCode).to.eq(true);
      expect(response.body).to.have.all.keys(
        'base',
        'clouds',
        'cod',
        'coord',
        'dt',
        'id',
        'main',
        'name',
        'rain',
        'sys',
        'timezone',
        'visibility',
        'weather',
        'wind'
      );
      assert.isObject(response.body.clouds, 'val is object');
      expect(response.body.clouds).to.have.keys('all');
      assert.isObject(response.body.coord, 'val is object');
      expect(response.body.coord).to.have.keys('lat', 'lon');
      assert.isObject(response.body.main, 'val is object');
      expect(response.body.main).to.have.keys(
        'feels_like',
        'humidity',
        'pressure',
        'temp',
        'temp_max',
        'temp_min'
      );
      assert.isObject(response.body.rain, 'val is object');
      expect(response.body.rain).to.have.keys('1h');
      assert.isObject(response.body.sys, 'val is object');
      expect(response.body.sys).to.have.keys(
        'country',
        'id',
        'sunrise',
        'sunset',
        'type'
      );
      assert.isObject(response.body.wind, 'val is object');
      expect(response.body.wind).to.have.keys('deg', 'speed');
      assert.isArray(response.body.weather, 'val is array');
    });
  });

  it('Get weather data for a location - 404', () => {
    cy.request({
      method: 'GET',
      url: `${Cypress.env('URL')}weather?q=Invalid&appid=${Cypress.env(
        'APP_ID'
      )}`,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(404);
      expect(response.body.message).to.eq('city not found');
      expect(response.isOkStatusCode).to.eq(false);
      expect(response.statusText).to.eq('Not Found');
    });
  });

  it('Get weather data for a location - 400', () => {
    cy.request({
      method: 'GET',
      url: `${Cypress.env('URL')}weather?&appid=${Cypress.env('APP_ID')}`,
      failOnStatusCode: false,
    }).then((response) => {
      console.log(response);
      expect(response.status).to.eq(400);
      expect(response.body.message).to.eq('Nothing to geocode');
      expect(response.isOkStatusCode).to.eq(false);
      expect(response.statusText).to.eq('Bad Request');
    });
  });

  it('Get weather data for a location - 401', () => {
    cy.request({
      method: 'GET',
      url: `${Cypress.env('URL')}weather?q=${Cypress.env(
        'LOCATION'
      )}&appid=Invlaid`,

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
