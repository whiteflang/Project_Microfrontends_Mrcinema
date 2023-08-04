import {Component, OnInit, Input} from '@angular/core';
import { Movie } from '../../interfaces/api.interface';

@Component({
  selector: 'shared-movie-card',
  templateUrl: 'movie-card.component.html',
  styleUrls: ['movie-card.component.css'],
})
export class MovieCardComponent implements OnInit{

   @Input() movie!: Movie;

  constructor() { }

  ngOnInit(): void {
  }

  getImagen() {
    return 'https://via.placeholder.com/390x460/8a8c93ac';
  }

  getMovieName() {
    const title = this.movie.originalTitle;
    return title.length > 65
           ? `${title.slice(0, 61)} ...`
           : title;
  }

}
