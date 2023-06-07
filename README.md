# Project_Microfrontends_Mrcinema. 

_This project aims to implement the microfrontend architecture, which facilitates the seamless integration of different technologies within a unified solution. Specifically, Angular and React will be leveraged to achieve this objective._

## Documentation used for this projec. 📋 

* [Angular CLI](https://angular.io/cli).
+ [angular-architects/module-federation](https://www.npmjs.com/package/@angular-architects/module-federation).
- [The Microfrontend Revolution: Module Federation with Angular](https://www-angulararchitects-io.translate.goog/aktuelles/the-microfrontend-revolution-part-2-module-federation-with-angular/?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=es-419)

## Pre-requisitos: 🤌
- npm 
- Angular CLI 12 or higher (13, 14, 15, 16)

install dependency

```
npm install
npm install -g @angular/cli

```
# create the skeleton for a module federetion config.

the corresponding folder is created and then a parent named container  module is created with the command

```
ng new --help
ng new --minimal --skip-git --routing container

```

then a child module is created and the minimal command is used to obtain a module as simplified. 

```
ng new --minimal --skip-git --routing Marketing

``


