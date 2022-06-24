import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from 'src/app/models/movies.models';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent implements OnInit {
  slideOpts = {
    slidesPerView: 2.5,
    freeMode: true,
    spaceBetween: -10,
  };

  @Input() movies: Movie[];
  @Input() withLoadMore: boolean = false;

  @Output() loadMore = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onLoadMore() {
    this.loadMore.emit();
  }
}
