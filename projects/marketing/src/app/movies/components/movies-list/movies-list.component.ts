import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIService } from '../../../shared/services/api.service';
import { Movie } from '../../../shared/interfaces/api.interface';
import { forkJoin } from 'rxjs';

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

  public readonly soon = 'soon';
  public readonly billboard = 'billboard';

  constructor(private moviesService: APIService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const filter = params['filter'];
      this.nowPlayingFilter = filter !== 'soon';
      this.getMoviesList();
    });
  }

  getMoviesList() {
    forkJoin([
      this.moviesService.getNowPlayingMovies(),
      this.moviesService.getPremiereMovies()
    ])
    .subscribe(([nowPlayingMovies, premiereMovies]) => {
      this.nowPlayingMovies = nowPlayingMovies;
      this.premiereMovies = premiereMovies;
      this.filterMovies(this.nowPlayingFilter);
    });
  }

  filterMovies(nowPlaying: boolean) {
    this.nowPlayingFilter = nowPlaying;
    this.filteredMovies = this.nowPlayingFilter
      ? this.nowPlayingMovies
      : this.premiereMovies;
  }

}
