import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { startsWith, WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';

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
  {
      path: 'dashboard',
      component: WebComponentWrapper,
      data: {
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
export class AppRoutingModule { }
