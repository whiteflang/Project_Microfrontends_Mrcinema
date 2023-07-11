import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { startsWith, WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'movies',
    loadChildren: () => loadRemoteModule({
      type: 'manifest',
      remoteName: 'marketing',
      exposedModule: './MoviesModule'
    })
    .then(m => m.MoviesModule)
  },
  {
    path: 'candy-shop',
    loadChildren: () => loadRemoteModule({
      type: 'manifest',
      remoteName: 'marketing',
      exposedModule: './CandyShopModule'
    })
    .then(m => m.CandyShopModule)
  },
  {
      path: 'dashboard',
      component: WebComponentWrapper,
      data: {
        type: 'script',
        remoteEntry: 'http://localhost:8082/remoteEntry.js',
        remoteName: 'backoffice',
        exposedModule: './dashboard/App',
        elementName: 'backoffice-app'
      } as WebComponentWrapperOptions
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{ }
