# React Map app

> Create, edit, delete, view map locations with react and 3rd party map-APIs

## Table of Contents

- [Preview](#preview)
- [Installation](#installation)
- [User-requirements](#user-requirements)
- [Dev-requirements](#Dev-requirements)
- [Q&A](#Q&A)
- [Support](#support)

## Preview

URL: https://react-map-app.netlify.com/
![]()

## Installation

Install [Node.js](https://nodejs.org/en/), [Git](https://git-scm.com/) and then:

```sh
git clone https://github.com/antekai/ct-med-map.git react-map-app
cd react-map-app
yarn install
yarn start
```

## User-requirements

- [x] Create, view, edit, delete map locations (React)
- [x] Validate location input
- [ ] Sync map locations with Google map api (React, react-google-maps)
- [ ] Save map locations to REST api (axios, firebase)

## Dev-requirements

- [x] Deploy react-client to Netlify
- [ ] Unit, integration tests (jest, react-testing-library)
- [ ] End to end tests (cypress)
- [ ] Fallback for no 3rd party map api
- [ ] Fallback/alternative map api (mapbox)
- [ ] Fallback/alternative backend api (express.js)
- [ ] Improve README (Design considerations, previews)

## Q&A

- How do you handle configuration values? What if those values change?
- What happens if we encounter an error with the third-party API integration?
- Will it also break our application, or are they handled accordingly?
- Now we will need to change the third-party geocoder API to another one. How can we
  change our current solution so that we can make this change as seamless as possible? Or
  how will we change (or refactor) our solution so that any future changes with the third-party
  integration is only done in isolation?

## Support

Please [open an issue](https://github.com/antekai/ct-pl-editableTable-react/issues/new) for support.
