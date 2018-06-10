# K Site Starter

```
ng new <workspace>
cd <workspace>

yarn install @nguniversal/common @nguniversal/express-engine @nguniversal/module-map-ngfactory-loader
yarn install -D @types/express express 
yarn install -D jasmine webpack webpack-cli serve

# fix rxjs until rxjs update
yarn install @types/node@~10.1.4

new g application --routing --style=scss --prefix=<prefix 1> <project 1>
ng g universal --client-project=<project 1> --appId=<appId 1>
ng g app-shell --client-project=<project 1> --universal-project
ng add @angular/pwa --project=<project 1>
ng add @angular/material --project=<project 1>

new g application --routing --style=scss --prefix=<prefix 2> <project 2>
ng g universal --client-project=<project 1> --appId=<appId 2>
ng g app-shell --client-project=<project 1> --universal-project
ng add @angular/pwa --project=<project 1>
ng add @angular/material --project=<project 1>
```

- [x] PWA
- [x] [Universal Rendering](https://github.com/angular/angular-cli/wiki/stories-universal-rendering)
- [ ] i18n
- [ ] [HMR](https://github.com/angular/angular-cli/wiki/stories-configure-hmr)
- [ ] [Proxy](https://github.com/angular/angular-cli/wiki/stories-proxy)
- [ ] Material(https://github.com/angular/material2)
- [ ] [NGXS](https://github.com/ngxs/store)
- [ ] [Budgets](https://github.com/angular/angular-cli/wiki/stories-budgets)

# Usage

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
