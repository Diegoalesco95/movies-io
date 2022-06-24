import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from 'src/app/models/movies.models';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  movies: Movie[] = [];
  popularMovies: Movie[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getMoviesInTheatres().subscribe((movies) => {
      this.movies = [...movies];
    });

    this.getPopularMovies();
  }

  onLoadMore() {
    this.getPopularMovies();
  }

  getPopularMovies() {
    return this.moviesService.getPopularMovies().subscribe((movies) => {
      this.popularMovies = [...this.popularMovies, ...movies];
    });
  }
}
