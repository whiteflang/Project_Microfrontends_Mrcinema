import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../interfaces/api.interface';

@Injectable({providedIn: 'root'})
export class APIService {

  private nowPlayingUrl = 'http://api.test.mrcinema.yuju/cinema/v1/movie/nowPlaying';
  private premiereUrl = 'http://api.test.mrcinema.yuju/cinema/v1/movie/premiere';

  constructor(private readonly http: HttpClient) {}

  getNowPlayingMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.nowPlayingUrl);
  }

  getPremiereMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.premiereUrl);
  }

}
