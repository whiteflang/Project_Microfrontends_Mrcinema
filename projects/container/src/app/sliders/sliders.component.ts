import { Component } from '@angular/core';

@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.component.html',
  styleUrls: ['./sliders.component.css']
})
export class SlidersComponent {
  images: string[] = [
    '../../assets/img/barbie.jpg',
    '../../assets/img/guardianOfGalaxy.jpg',
    '../../assets/img/oppenheimer.jpg',
    '../../assets/img/spiderman-across.jpg',
  ];
  currentImage: string;
  activeIndex: number;

  constructor() {
    this.currentImage = this.images[0];
    this.activeIndex = 0;
  }

  previousSlide() {
    this.activeIndex = (this.activeIndex - 1 + this.images.length) % this.images.length;
    this.currentImage = this.images[this.activeIndex];
  }

  nextSlide() {
    this.activeIndex = (this.activeIndex + 1) % this.images.length;
    this.currentImage = this.images[this.activeIndex];
  }

  goToSlide(index: number) {
    this.activeIndex = index;
    this.currentImage = this.images[this.activeIndex];
  }
}

