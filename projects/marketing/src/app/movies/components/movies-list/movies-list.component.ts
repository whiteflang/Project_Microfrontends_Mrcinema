import { Component, OnInit } from '@angular/core';
import { APIService } from '../../../shared/services/api.service';
import { Movie } from '../../../shared/interfaces/api.interface';
import { map } from 'rxjs';
import { GenresMock } from '../../../shared/mocks/genres.mock';

interface MovieCustom extends Movie {
  genres_names: string[];
}

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent implements OnInit {

  public movies: Movie[] = [];
  public filteredMovies: Movie[] = [];
  public nowPlayingFilter: boolean = true;

  constructor(private moviesService: APIService) {}

  ngOnInit() {
    this.getMoviesList();
  }

  getMoviesList() {
    this.moviesService.getMovies().pipe(
      map((movies) => {
        movies.map((movie: any ) => {
          movie.genre_ids = movie.genre_ids.map((genre: number) => {
            const name = GenresMock.find( item => item.id === genre )?.name
            return ` ${name}`
          })
          return movie
        })
        return movies
      })
    ).subscribe(result => {
      this.movies = result;
      console.log(this.movies);
      this.filterMovies(this.nowPlayingFilter);
    });
  }

  filterMovies(nowPlaying: boolean) {
    this.nowPlayingFilter = nowPlaying;
    this.filteredMovies = this.nowPlayingFilter
      ? this.movies.filter(movie => movie.vote_average >= 8.4)
      : this.movies.filter(movie => movie.vote_average < 8.4);
  }

}
