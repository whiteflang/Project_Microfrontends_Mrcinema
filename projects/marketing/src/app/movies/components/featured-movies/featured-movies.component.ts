import { Component, OnInit } from '@angular/core';
import { APIService } from '../../../shared/services/api.service';
import { Movie } from '../../../shared/interfaces/api.interface';

@Component({
  selector: 'app-featured-movies',
  templateUrl: 'featured-movies.component.html',
  styleUrls: ['featured-movies.component.css'],
})
export class FeaturedMoviesComponent implements OnInit {

  public billboardMovies: Movie[] = [];
  public soonMovies: Movie[] = [];
  public movieFilter: boolean = true;

  constructor(private moviesService: APIService) {}

  ngOnInit() {
    this.getMoviesList();
  }

  getMoviesList() {
    this.moviesService.getNowPlayingMovies().subscribe(result => {
      this.billboardMovies = result.splice(0,3);
    });

    this.moviesService.getPremiereMovies().subscribe(result => {
      this.soonMovies = result.splice(0,3);
    })
  }

  scrollStart() {
    window.scroll({ top: 0 });
  }
}
