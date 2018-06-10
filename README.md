# K Site Starter

- [x] PWA
- [x] [Universal Rendering](https://github.com/angular/angular-cli/wiki/stories-universal-rendering)
- [x] i18n
- [ ] [HMR](https://github.com/angular/angular-cli/wiki/stories-configure-hmr)
- [x] [Proxy](https://github.com/angular/angular-cli/wiki/stories-proxy)
- [x] Material(https://github.com/angular/material2)
- [x] Flex Layout(https://github.com/angular/flex-layout)
- [x] [NGXS](https://github.com/ngxs/store)
- [ ] [Budgets](https://github.com/angular/angular-cli/wiki/stories-budgets)
- [ ] [Hard Source plugins](https://github.com/mzgoddard/hard-source-webpack-plugin) for lightning-fast development builds.

## 1. Create Workspace

```
ng new <workspace>
cd <workspace>

echo fix yarn warning
yarn install -D jasmine

echo fix rxjs until rxjs update
yarn install @types/node@~10.1.4

rm -rf e2e
rm -rf src

echo Please remove projects in angular.json

```

## 2. Create Application(s)

```
new g application --routing --style=scss --prefix=<prefix 1> <project 1>

```

## PWA

```
ng add @angular/pwa --project=<project>
```

## Universal Rendering

```
ng g universal --client-project=<project 1> --appId=<appId 1>
yarn install @nguniversal/common @nguniversal/express-engine @nguniversal/module-map-ngfactory-loader
yarn install -D @types/express express 
yarn install -D webpack webpack-cli serve

echo copy files from [Universal Starter](https://github.com/angular/universal-starter)
cp prerender.ts server.ts static.paths.ts webpack.server.config.js <workspace>/projects/<project>
echo fix relative path in these files  
```

## i18n
```
yarn add @ngx-translate/core @ngx-translate/http-loader
yarn add -D @biesbjerg/ngx-translate-extract
```
This [tutorial](https://www.codeandweb.com/babeledit/tutorials/how-to-translate-your-angular-app-with-ngx-translate) explains how to use [ngx-translate](http://www.ngx-translate.com/), ngx-translate-extract and [BabelEdit](https://www.codeandweb.com/babeledit) to translate your Angular app.

## App Shell

```
ng g app-shell --client-project=<project> --universal-project
```

## Material

```
ng add @angular/material --project=<project>
```

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
