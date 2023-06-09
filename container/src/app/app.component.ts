import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <ul>
  <li><a routerLink="/"><img src="../assets/logo-mrcinema.png" width="100"></a></li>
  <li><a routerLink="/">Home</a></li>
  <li><a routerLink="/movies/list">Movies</a></li>
 </ul>
  
 <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'container';
}
  