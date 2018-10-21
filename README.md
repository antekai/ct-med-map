# React Map app (WorkInProgress)

[![Build Status](https://travis-ci.org/antekai/ct-med-map.svg?branch=master)](https://travis-ci.org/antekai/ct-med-map)[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)[![Cypress.io tests](https://img.shields.io/badge/cypress.io-tests-green.svg?style=flat-square)](https://cypress.io)

> Create, edit, delete, view map locations with react and google maps API

## Table of Contents

- [Preview](#preview)
- [Installation](#installation)
- [User-features](#user-features)
- [Technical-features](#Technical-features)
- [Support](#support)

## Preview

URL: https://react-map-app.netlify.com/

![](react-map-app-cy.gif)
_Sneak preview e2e testing with cypress (newLocation useflow)_

## Installation

Install [Node.js](https://nodejs.org/en/), [Git](https://git-scm.com/) and then:

```sh
git clone https://github.com/antekai/ct-med-map.git react-map-app
cd react-map-app
yarn install
yarn start
```

> Note: After installing you have to set google map api key.

```js
// Replace gMapKey with your own key
// src/Map/GoogleMapWrapper.js
const gMapKey = `${process.env.REACT_APP_GOOGLE_MAP_API}`;
```

## User-features

- [x] Create, view, edit, delete map locations (React-client)
- [x] Validate user input (getFieldDecorator, regex)
- [x] View (synced) map locations with Google map api (React, react-google-maps)
- [x] Save map locations to a backend api (axios, firebase)

## Technical-features

![](react-map-app-arch.jpg)  
_Project architecture_

- [x] Module-based folder structure and path-based component naming
- [x] Local state management (React)
- [x] Type checking (prop-types)
- [x] Integration, End to end(E2E) tests (cypress.io)
- [x] Manage project with automated Kanban (github project)
- [x] Setup Continuous Deployment (Netlify CD)
- [x] Setup Continuous Integration (Travis CI)
- [x] Setup automated versioning (semantic-release)
- [x] Monitor bundle - report: [wba-report.html](http://htmlpreview.github.io/?https://github.com/antekai/ct-med-map/blob/master/bundleReports/wba-report.html) (webpack-bundle-analyzer)
- [ ] Unit, integration tests (jest, react-testing-library, wallaby)
- [ ] Fallback for no 3rd party map api
- [ ] Fallback/alternative map api (mapbox)
- [ ] Fallback/alternative backend api (express.js)

## Support

Please [open an issue](https://github.com/antekai/ct-med-map/issues/new) for support.
