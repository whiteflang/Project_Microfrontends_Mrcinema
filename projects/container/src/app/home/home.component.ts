import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template:` 
  <app-header></app-header>
  <app-sliders>/</app-sliders>
  <div style="background:white; whidth:100vh; height:80vh; " ></div>
  <app-footer></app-footer>
  `,
  styles:[]
})
export class HomeComponent {

}
