import { loadRemoteModule } from '@angular-architects/module-federation-runtime';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @ViewChild('featuredMovies', {read: ViewContainerRef}) featuredMoviesContainer!: ViewContainerRef;


  ngOnInit(): void {

    this.loadFeaturedMovies();
  }

  async loadFeaturedMovies() {
    const m = await loadRemoteModule({
      type: 'manifest',
      remoteName: 'marketing',
      exposedModule: './FeaturedMoviesComponent'
    });

    const ref = this.featuredMoviesContainer.createComponent(m.FeaturedMoviesComponent);
  }
}
