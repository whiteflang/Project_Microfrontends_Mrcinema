import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FeaturedMoviesComponent } from './components/featured-movies/featured-movies.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { ColombianMoviesComponent } from './components/colombian-movies/colombian-movies.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';

export const MOVIES_ROUTES: Routes = [
  {
    path: 'list/:filter',
    component: MoviesListComponent
  },
  {
    path: 'colombian-movies',
    component: ColombianMoviesComponent
  },
  {
    path: 'movie-details',
    component: MovieDetailsComponent
  }
];

@NgModule({
  declarations: [
    MoviesListComponent,
    FeaturedMoviesComponent,
    ColombianMoviesComponent,
    MovieDetailsComponent,
  ],
  exports: [
    FeaturedMoviesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(MOVIES_ROUTES),
    SharedModule,
  ]
})
export class MoviesModule { }
