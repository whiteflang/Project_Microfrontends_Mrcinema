import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { RouterModule, Routes } from '@angular/router';


export const MOVIES_ROUTES: Routes = [
  {
    path: 'list',
    component: MoviesListComponent
  }
];


@NgModule({
  declarations: [
    MoviesListComponent

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(MOVIES_ROUTES)
  ]
})
export class MoviesModule { }
