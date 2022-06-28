import { Component, OnInit } from '@angular/core';
import { Genre, MovieDetails } from '../models/movies.models';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  moviesByGenre: { [genre: string]: MovieDetails[] } = {};

  constructor(private storageService: StorageService) {}

  ngOnInit() {
    this.storageService.init().then(() => {
      this.sortMovies();
    });
  }

  private sortMovies() {
    const movies = this.storageService.storedMovies;

    movies.forEach((movie) => {
      movie.genres.forEach((genre) => {
        if (!this.moviesByGenre[genre.name]) {
          this.moviesByGenre[genre.name] = [];
        }

        if (!this.moviesByGenre[genre.name].find((m) => m.id === movie.id)) {
          this.moviesByGenre[genre.name] = [
            ...this.moviesByGenre[genre.name],
            movie,
          ];
        }
      });
    });
  }

  ionViewWillEnter() {
    this.sortMovies();
  }
}
