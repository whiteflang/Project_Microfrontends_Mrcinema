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
  {
    path: 'dashboard',
    loadChildren: () => import('dashboard/App').then(m => m.App)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
