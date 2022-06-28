import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { MovieCredits, MovieDetails } from 'src/app/models/movies.models';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  @Input() movieId: number;

  movie: MovieDetails = {};
  movieCredits: MovieCredits = {};
  hideText = 150;

  slideOpts = Object.freeze({
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -5,
  });

  constructor(
    private moviesService: MoviesService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.moviesService.getMovieDetails(this.movieId).subscribe((movie) => {
      console.log(movie);
      this.movie = movie;
    });

    this.moviesService.getMovieCredits(this.movieId).subscribe((credits) => {
      console.log(credits);
      this.movieCredits = credits;
    });
  }

  onReadMore() {
    this.hideText = this.movie.overview.length;
  }

  onBack() {
    this.modalCtrl.dismiss();
  }

  onFavorite() {}
}
