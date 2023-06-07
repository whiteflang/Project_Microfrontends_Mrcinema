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
# create the skeleton for a module federetion config.  	🦴 	🦴 

the corresponding folder is created and then a parent named container  module is created with the command

```
ng new --help
ng new --minimal --skip-git --routing container

```

then a child module is created and the minimal command is used to obtain a module as simplified. 

```
ng new --minimal --skip-git --routing Marketing
```
# implementation of the dependency @angular-architects/module-federation. 🎬

_The "@angular-architects/module-federation" dependency is a package provided by Angular Architects that simplifies the configuration of module federation in Angular applications._

_Module federation is a technique that allows modules and components to be shared efficiently between applications or microfrontends. This specific dependency provides an API and tools to configure module federation more easily in Angular projects._


**The command adds the configuration to the parent container, taking into account the 'port:8080' and specifying the 'type:host', indicating that this module will control and inject any child containers that are created.**

```
ng g @angular-architects/module-federation:init --project container--port 8080 --type host
```

**repeats the process whit the module child marketing**
```
 ng g @angular-architects/module-federation:init --project marketing --port 8081 --type remote}
 
```

## Switch into the project 'marketing' and open the generated configuration file 'projects\marketing\webpack.config.js.' It contains the module federation configuration for 'marketing'. Adjust it as follows:

```javascript
 const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'marketing',

  exposes: {
    './MoviesModule': './src/app/movies/movies.module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
 
```
## Switch into the 'containe' project and open the file projects\container\webpack.config.js. Make sure, the mapping in the remotes section uses port 8080 (and hence, points to the Micro Frontend):

```javascript

const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  remotes: {
    "marketing": "http://localhost:8081/remoteEntry.js",    
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});

```
### creat new component home:
```
ng g c home
```

 
 
## creat new folder typings whit three documents app-:




