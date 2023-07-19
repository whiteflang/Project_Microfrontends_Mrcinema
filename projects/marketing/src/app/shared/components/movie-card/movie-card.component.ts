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
    return 'https://via.placeholder.com/385x440/8a8c93ac';
  }

}
