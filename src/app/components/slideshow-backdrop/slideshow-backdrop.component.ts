import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movies.models';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent implements OnInit {
  slideOpts = {
    slidesPerView: 1.3,
    freeMode: true,
    spaceBetween: -10,
  };

  @Input() movies: Movie[];

  constructor() {}

  ngOnInit() {}
}
