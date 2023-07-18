import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { APIResponse, Movie } from '../interfaces/api.interface';

@Injectable({providedIn: 'root'})
export class APIService {

  private url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=2023&region=CO&sort_by=popularity.desc&vote_average.gte=6';
  private header = {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNmQ3ZDFiMDkyYTgzYmVkNjA0N2NhZDk5OTljOTdlNSIsInN1YiI6IjY0YWYyYTM4YzQ5MDQ4MDBjNTA2NGM2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7afMDkm3OI78H_DLrIc4n92y9stW-5-UUcQ2GbctXCc'};

  constructor(private readonly http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.http.get<APIResponse>(this.url, { headers: this.header}).pipe(
      map(result => result.results),
    );
  }

}
