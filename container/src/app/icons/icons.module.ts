import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatherModule } from 'angular-feather';
import { ShoppingCart, User, Search} from 'angular-feather/icons';

const icons = {

  ShoppingCart,
  User,
  Search


}



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeatherModule.pick(icons)

  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }
