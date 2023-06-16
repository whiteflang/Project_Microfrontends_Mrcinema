import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent } from './pages/movies-list/movies-list.component';

import { SharedModule } from '../shared/shared.module';



export const MOVIES_ROUTES: Routes = [
  {
    // Movies List
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
    RouterModule.forChild(MOVIES_ROUTES),
    SharedModule
  ]
})
export class MoviesModule { }
