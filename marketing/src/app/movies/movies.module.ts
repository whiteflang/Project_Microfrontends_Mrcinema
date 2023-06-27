import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

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
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
  ]
})
export class MoviesModule { }
