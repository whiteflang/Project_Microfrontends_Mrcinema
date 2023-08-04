import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.component.html',
  styleUrls: ['./sliders.component.css']
})
export class SlidersComponent implements OnInit {

  public images: string[] = [
    '../../assets/img/oppenheimer.jpg',
    '../../assets/img/barbie.jpg',
    '../../assets/img/guardianOfGalaxy.jpg',
    '../../assets/img/spiderman-across.jpg',
  ];
  public currentImage: string;
  public activeIndex: number;

  constructor() {
    this.currentImage = this.images[0];
    this.activeIndex = 0;
  }
  ngOnInit(): void {
    setInterval(() => {
      this.activeIndex = this.activeIndex < this.images.length - 1
       ? this.activeIndex + 1 : 0;
      this.currentImage = this.images[this.activeIndex];
    }, 10 * 1000);
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
