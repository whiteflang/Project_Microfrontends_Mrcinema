import { Component, OnInit } from '@angular/core';
import { APIService } from '../../../shared/services/api.service';
import { Movie } from '../../../shared/interfaces/api.interface';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent implements OnInit {

  public nowPlayingMovies: Movie[] = [];
  public premiereMovies: Movie[] = [];
  public filteredMovies: Movie[] = [];
  public nowPlayingFilter: boolean = true;

  constructor(private moviesService: APIService) {}

  ngOnInit() {
    this.getMoviesList();
  }

  getMoviesList() {
    this.moviesService.getNowPlayingMovies().subscribe(result => {
      this.nowPlayingMovies = result;
      this.filterMovies(this.nowPlayingFilter);
    });
    this.moviesService.getPremiereMovies().subscribe(result => {
      this.premiereMovies = result;
    })
  }

  filterMovies(nowPlaying: boolean) {
    this.nowPlayingFilter = nowPlaying;
    this.filteredMovies = this.nowPlayingFilter
      ? this.nowPlayingMovies
      : this.premiereMovies;
  }

}
