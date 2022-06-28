import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from 'src/app/models/movies.models';
import { DetailComponent } from 'src/app/components/detail/detail.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  movies: Movie[] = [];
  suggestions = ['The Shawshank Redemption', 'The Godfather', 'Spiderman'];
  textToSearch = '';
  isLoading = false;

  constructor(
    private moviesService: MoviesService,
    private modalCtrl: ModalController
  ) {}

  onSelect(suggestion: string) {
    this.textToSearch = suggestion;
  }

  search(event) {
    this.textToSearch = event.detail.value;

    if (this.textToSearch.length > 0) {
      this.isLoading = true;
      this.moviesService.searchMovies(this.textToSearch).subscribe((movies) => {
        this.movies = movies;
        this.isLoading = false;
      });
    } else {
      this.movies = [];
      this.isLoading = false;
    }
  }

  async onViewDetails(movieId: number) {
    const modal = await this.modalCtrl.create({
      component: DetailComponent,
      componentProps: {
        movieId,
      },
    });

    modal.present();
  }
}
