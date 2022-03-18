# ROE the DEV
Personal website made with ReactJS, NodeJS, SCSS, Jest, Typescript, and Parcel.

[![Deploy](https://github.com/rardoz/roethedev/actions/workflows/deploy.yml/badge.svg)](https://github.com/rardoz/roethedev/actions/workflows/deploy.yml)

## Development
### Install the app
`npm i`
### Start the app
`npm start`

### Build the app
`npm run build`

### Test the app
`npm test`


### Mixin examples

#### Responsive SCSS Mixin
There are more but these are the main ones and they must be written in logical order

```scss
  // phone
  @include breakpoint-mixin("small-or-less") {
    flex-basis: 100%;
    width: 100%;
  }
  //tablet
  @include breakpoint-mixin("medium-or-greater") {
    flex-basis: 50%;
    width: 50%;
  }
  //desktop
  @include breakpoint-mixin("large-or-greater") {
    flex-basis: 33.3333%;
    width: 33.3333%;
  }
```