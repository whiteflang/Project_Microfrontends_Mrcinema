import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProductListComponent } from './components/product-list/product-list.component';

export const MOVIES_ROUTES: Routes = [
  {
    path: '',
    component: ProductListComponent
  },
];

@NgModule({
  declarations: [
    ProductListComponent
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
