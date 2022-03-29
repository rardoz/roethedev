# ROE the DEV
Personal website made with ReactJS, NodeJS, SCSS, Jest, Typescript, and Parcel.

[![Deploy](https://github.com/rardoz/roethedev/actions/workflows/deploy.yml/badge.svg)](https://github.com/rardoz/roethedev/actions/workflows/deploy.yml)


## Goals for this site

I really want this site to be a starting point for a set of classes I want to create. Each chapter will focus on different parts of this application. There are intentional refactors scattered throughout the code. I hope to get M1 of the class done within the next few weeks.

In the meantime, take a look at my code. Its open source and I love feedback and good conversation!

## Development
1. Copy the `.env.example` file to `.env` file in the project root
1. Setup env tokens with contentful
1. Then start the app
1. The app will run even if contentful is not setup

### Specs

• Node 16+
• npm 8+
• Linux

### Install the app
`npm i`
### Start the app
`npm start`

### Build the app
`npm run build`

### Test the app
`npm test`

## HTML Token Mapping
The command `npm run tokens` will map any env variable contained within the .env file to the token set within the HTML. This happens just after the build process when running inside of the github action.

The format for a token looks like this:
`{{{%ENV_VAR%}}}`

For instance:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id={{{%GA_AD_SENSE_TRACKING_ID%}}}"></script>
```

Will map to:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-123"></script>
```

## Mixin examples

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

## CMS - Contentful

This app is using the contentful SDK to gather posts.
See https://www.npmjs.com/package/contentful
