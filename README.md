# Project_Microfrontends_Mrcinema. 

_This project aims to implement the microfrontend architecture, which facilitates the seamless integration of different technologies within a unified solution. Specifically, Angular and React will be leveraged to achieve this objective._

## Official documentation used for this project. 📋 

* [Angular CLI](https://angular.io/cli).
+ [angular-architects/module-federation](https://www.npmjs.com/package/@angular-architects/module-federation).
- [The Microfrontend Revolution: Module Federation with Angular](https://www-angulararchitects-io.translate.goog/aktuelles/the-microfrontend-revolution-part-2-module-federation-with-angular/?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=es-419)

## Pre-requisites: 🤌
- node.js and npm 
- Angular CLI 12 or higher (13, 14, 15, 16)

install dependency

```
npm install -g @angular/cli
```
# Create the skeleton for a module federetion config.  	🦴 	🦴 

For the Host application we use the CLI to generate an Angular Project with minimal configuration called _container_ with the following command:

```
ng new --minimal --skip-git --routing container
```

then, a Remote application should be generated with minimal configuration to create a second Angular project called _narketing_ with the following command: 

```
ng new --minimal --skip-git --routing marketing
```
## 1.implementation of the dependency @angular-architects/module-federation. 🎬

_The "@angular-architects/module-federation" dependency is a package provided by Angular Architects that simplifies the configuration of module federation in Angular applications._

_Module federation is a technique that allows modules and components to be shared efficiently between applications or microfrontends. This specific dependency provides an API and tools to configure module federation more easily in Angular projects._


**The following command adds the configuration to the host container, taking into account the 'port:8080' and specifying the 'type:host', indicating that this module will control and inject any child contaiapplications that are created.**

```
cd container
npm install @angular-architects/module-federation
ng add @angular-architects/module-federation --project container --type host --port 8080
```

**Repeat the same process with the child module marketing**

```
cd marketing
npm install @angular-architects/module-federation
ng add @angular-architects/module-federation --project marketing --type remote --port 8081
```

## 2.Switch into the project 'marketing' and open the generated configuration file 'projects\marketing\webpack.config.js.' It contains the module federation configuration for 'marketing'. Adjust it as follows:

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
## 3.Switch into the 'containe' project and open the file projects\container\webpack.config.js. Make sure, the mapping in the remotes section uses port 8080 (and hence, points to the Micro Frontend):

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
## 4.Create new component home (for both projects _marketing_ and _container_):

```
ng g c home
```

## 5.Create new folder typings whith an intitial declaration file (for the container): 
_Within the "typings" folder, it is common to find custom type definition files that describe the interfaces and data types used in the module federation configuration. These files help ensure the integrity and consistency of communication between federated modules by providing information about the expected data structures and types of objects used._

```javascript
// decl.d.ts
declare module 'marketing/MoviesModule';
```

** 'app-rotuing.module.ts:

```javascript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'movies',
    loadChildren: () => import('marketing/MoviesModule').then(m => m.MoviesModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

** 'app.module':

```javascript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <ul>
    <li><img src="../assets/angular.png" width="50"></li>
    <li><a routerLink="/">Home</a></li>
    <li><a routerLink="/movies/list">Movies</a></li>
  </ul>
  
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'container';
}
```

** ´app.component.ts´:

```javascript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <ul>
    <li><img src="../assets/angular.png" width="50"></li>
    <li><a routerLink="/">Home</a></li>
    <li><a routerLink="/movies/list">Movies</a></li>
  </ul>
  
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'container';
}
```

# Deployment Try it out 🥽📦

Now, let's try it out!

## Make sure you have latest dependencies updates before start all applications:

for Angular Monorepo (root directory of the repo):

```
npm install
```

for container:

```
cd projects/container
npm install
```

for marketing:

```
cd projects/marketing
npm install
```

for backoffice:

```
cd projects/backoffice
npm install
```

## Start the `container`, `marketing` and `backoffice` in different terminals:
  
for container:

```
npm run start:container
```

for marketing:

```
npm run start:marketing
```

for backoffice:

```
npm run start:backoffice
```

You can run all applications concurrently in the same terminal by running the following script:

```
npm run start:all
```

## Navigate to container and isolated applications:

Your browser will open your browser and navigate to http://localhost:8080 for the _container_ application.

To access to the _marketing_ application in isolation, navigate to http://localhost:8081.

To access to the _backoffice_ application in isolation, navigate to http://localhost:8082.