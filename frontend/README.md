# Wolt Assignment Front End

This a front end app for [wolt summer2021-internship assignment](https://github.com/woltapp/summer2021-internship).

## Before All

Make sure you have Nodejs first, and before all you should run:

`yarn` or `npm install`

to install dependencies.

## Production

Before start app, you should build app first by

`$ yarn build` or `npm build`

To start app in production mode, please run

`$ yarn start:prod` or `$ npm run start:prod`

You can also run app with Docker by

`docker run --rm -it -p 3001:3001 nanyangcn/wolt-frontend`

The production mode runs in `http://localhost:3001`

## Development

Before start app, you should start json server first by

`$ yarn server` or `npm run server`

The server runs in `http://localhost:3001`

And then run

`$ yarn start` or `npm start`

to start app in development mode.

The development mode runs in `http://localhost:3001`

## Test

Run tests by

`$ yarn test` or `npm test`
