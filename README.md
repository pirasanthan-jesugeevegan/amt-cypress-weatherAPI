<p align="center">
 <img src="https://raw.githubusercontent.com/bugsounet/MMM-Weather/master/logo.png" />

 </p>
 <p align="center">
  <img height="50px" src="https://miro.medium.com/max/7200/1*Jkb_tsMBOvL6wQ8bzldu8Q.png" />
  <img height="50px" src="https://cdn.iconscout.com/icon/free/png-256/mocha-1-1175012.png" />
 </p>
<h1 align="center">OpenWeather API </h1>

This is a task to Automate the OpenWeather API using Cypress and Mochawesome report, Please see below for the Test Case that are automated 

## **Test Scenario**:  Get Air Pollution  

| Test Case Number | Test Case |
|--|--|
|TC01| GET `/air_pollution/history` - 200 |
|TC02| GET `/air_pollution/history` - Invalid Latitude - 400|
|TC03| GET `/air_pollution/history` - Invalid Longitude - 400 |
|TC04| GET `/air_pollution/history` - Invalid Start Time - 400 |
|TC05| GET `/air_pollution/history` - Invalid End Time - 400 |
|TC06| GET `/air_pollution/history` - No Location - 400 |
|TC07| GET `/air_pollution/history` - No Time - 400 |
|TC08| GET `/air_pollution/history` - invalid APP ID - 401 |

## **Test Scenario**:  Get Current Weather

| Test Case Number | Test Case |
|--|--|
|TC01| GET `/weather` - 200 |
|TC02| GET `/weather` - Invalid Location - 404|
|TC03| GET `/weather` - No Location - 400 |
|TC04| GET `/weather` - Invalid APP ID - 401 |

Note - These are one of the few to be automated
## Install

1.  clone the repo
2.  `npm install` or 	`yarn install`


## Run tests
**CLI** - Run CLI

 
```
npx cypress run
```
**Cypress UI** - Run on Cypress UI
 
```
yarn || npm test:chrome
```
## Technology used:

 - Cypress 
 - OpenWeather API
 - Mochawsome

## DEMO
[Live report - Schedule to run everyday ](https://pirasanthan-jesugeevegan.github.io/amt-cypress-weatherAPI/)
