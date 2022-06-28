import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { MovieCredits, MovieDetails } from 'src/app/models/movies.models';
import { MoviesService } from 'src/app/services/movies.service';
import { StorageService } from 'src/app/services/storage.service';

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
  movieIsFavorite = false;

  slideOpts = Object.freeze({
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -5,
  });

  constructor(
    private moviesService: MoviesService,
    private modalCtrl: ModalController,
    private storageService: StorageService
  ) {}

  ngOnInit() {
    this.moviesService.getMovieDetails(this.movieId).subscribe((movie) => {
      this.movie = movie;
    });

    this.moviesService.getMovieCredits(this.movieId).subscribe((credits) => {
      this.movieCredits = credits;
    });

    this.storageService.movieIsFavorite(this.movieId).then((isFavorite) => {
      this.movieIsFavorite = isFavorite;
    });
  }

  onReadMore() {
    this.hideText = this.movie.overview.length;
  }

  onBack() {
    this.modalCtrl.dismiss();
  }

  onToggleFavorite() {
    this.storageService.saveRemoveMovie(this.movie);
    this.movieIsFavorite = !this.movieIsFavorite;
  }
}
