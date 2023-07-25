import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../interfaces/api.interface';

@Injectable({providedIn: 'root'})
export class APIService {

  private nowPlayingUrl = 'http://api.test.mrcinema.yuju/cinema/v1/movie/nowPlaying';
  private premiereUrl = 'http://api.test.mrcinema.yuju/cinema/v1/movie/premiere';
  headers: HttpHeaders;

  constructor(private readonly http: HttpClient) {
	const headers = new HttpHeaders();
	this.headers = headers.set('Access-Control-Allow-Origin','*');
  }

  getNowPlayingMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.nowPlayingUrl, {headers: this.headers});
  }

  getPremiereMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.premiereUrl, {headers: this.headers});
  }
}
