import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatherModule } from 'angular-feather';
import { ShoppingCart } from 'angular-feather/icons';

const icons = {
  ShoppingCart,
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeatherModule.pick(icons),
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }
