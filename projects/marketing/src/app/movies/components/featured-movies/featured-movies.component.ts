import { Component, OnInit } from '@angular/core';
import { APIService } from '../../../shared/services/api.service';
import { Movie } from '../../../shared/interfaces/api.interface';

@Component({
  selector: 'app-featured-movies',
  templateUrl: 'featured-movies.component.html',
  styleUrls: ['featured-movies.component.css'],
})
export class FeaturedMoviesComponent implements OnInit {

  public movies: Movie[] = [];
  public movieFilter: boolean = true;
  public billboardMovies: Movie[] = [];
  public soonMovies: Movie[] = [];

  constructor(private moviesService: APIService) {}

  ngOnInit() {
    this.getMoviesList();
  }

  getMoviesList() {
    this.moviesService.getMovies().subscribe(result => {
      this.movies = result;
      this.filterMovies(this.movieFilter);
    });
  }

  filterMovies(filter: boolean) {
    this.movieFilter = filter;
    if (this.movieFilter)
    this.billboardMovies = this.movies.filter(movie => movie.vote_average >= 8.4);
    this.soonMovies = this.movies.filter(movie => movie.vote_average < 8.4);
    this.billboardMovies = this.billboardMovies.splice(0,3);
    this.soonMovies = this.soonMovies.splice(0,3);
  }

  scrollStart() {
    window.scroll({ top: 0 });
  }
}
