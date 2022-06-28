import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

import { MovieDetails } from 'src/app/models/movies.models';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private _storage: Storage | null = null;
  private _storedMovies: MovieDetails[] = [];

  constructor(private storage: Storage, private toastCtrl: ToastController) {
    this.init();
  }

  get storedMovies(): MovieDetails[] {
    return this._storedMovies;
  }

  async init() {
    this._storage = await this.storage.create();
    await this.loadFavoriteMovies();
  }

  async loadFavoriteMovies() {
    try {
      const movies = await this.storage.get('movies');
      this._storedMovies = movies || [];
    } catch (error) {
      console.log(error);
    }
  }

  saveRemoveMovie(movie: MovieDetails) {
    let message = 'Added to favorites';
    let color = 'success';
    const exists = this._storedMovies.find(
      (storedMovie) => storedMovie.id === movie.id
    );

    if (exists) {
      this._storedMovies = this._storedMovies.filter(
        (storedMovie) => storedMovie.id !== movie.id
      );
      message = 'Removed from favorites';
      color = 'danger';
    } else {
      this._storedMovies = [movie, ...this._storedMovies];
    }

    this.showToast(message, color);
    this._storage?.set('movies', this._storedMovies);
  }

  async movieIsFavorite(movieId: number): Promise<boolean> {
    if (this._storedMovies.length === 0) {
      await this.loadFavoriteMovies();
    }

    return !!this._storedMovies.find(
      (storedMovie) => storedMovie.id === movieId
    );
  }

  async showToast(message: string, color: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000,
      color,
    });
    toast.present();
  }
}
