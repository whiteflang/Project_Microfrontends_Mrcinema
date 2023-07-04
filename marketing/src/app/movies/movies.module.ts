import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { SharedModule } from '../shared/shared.module';
import { FeaturedMoviesComponent } from './components/featured-movies/featured-movies.component';

export const MOVIES_ROUTES: Routes = [
  {
    path: 'list',
    component: MoviesListComponent
  }
];

@NgModule({
  declarations: [
    MoviesListComponent,
    FeaturedMoviesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(MOVIES_ROUTES),
    SharedModule
  ]
})
export class MoviesModule { }
