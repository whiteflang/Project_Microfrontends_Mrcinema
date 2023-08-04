import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LegalInfoComponent } from './components/legal-info/legal-info.component';
import { AboutComponent } from './components/about/about.component';
import { FAQComponent } from './components/faq/faq.component';

export const MISC_ROUTES: Routes = [
  {
    path: 'legal-info',
    component: LegalInfoComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'faq',
    component: FAQComponent
  },
];

@NgModule({
  declarations: [
    LegalInfoComponent,
    AboutComponent,
    FAQComponent
  ],
  exports: [

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(MISC_ROUTES),
    SharedModule,
  ]
})
export class MiscModule { }
