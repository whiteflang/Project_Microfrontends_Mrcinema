import { Component } from '@angular/core'


@Component({
  selector: 'app-navbar',
  template:   `

  <button mat-button [matMenuTriggerFor]="menu">Menu</button>
  <mat-menu #menu="matMenu">
      <a routerLink="/">
      <img src="../assets/logo-mrcinema.png" width="100">
      </a>
    </li>
    <button mat-menu-item>home</button>
    <button mat-menu-item>Cartelera</button>
  </mat-menu>
  
  <ul>
  <li><a routerLink="/"><img src="../assets/logo-mrcinema.png" width="100"></a></li>
  <li><a routerLink="/">Home</a></li>
  <li><a routerLink="/movies/list">Movies</a></li>
  <li><a routerLink="/dashboard">Dashboard</a></li>
 </ul>
  `,
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

}
