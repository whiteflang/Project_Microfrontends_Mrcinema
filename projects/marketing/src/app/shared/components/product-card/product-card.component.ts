import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  // @Input() movie!: Movie;

  constructor() { }

  ngOnInit(): void {
  }

  getImagen() {
    return 'https://via.placeholder.com/380x450/8a8c93ac';
  }
}
