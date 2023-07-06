import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CandyListComponent } from './components/candy-list/candy-list.component';

export const MOVIES_ROUTES: Routes = [
  {
    path: 'candylist',
    component: CandyListComponent
  },
];

@NgModule({
  declarations: [
    CandyListComponent
  ],
  exports: [

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(MOVIES_ROUTES),
    SharedModule,
  ]
})
export class CandyShopModule { }
