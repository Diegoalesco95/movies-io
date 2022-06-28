import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Movie, MovieDetails } from 'src/app/models/movies.models';
import { DetailComponent } from 'src/app/components/detail/detail.component';

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

  @Input() movies: MovieDetails[];
  @Input() withLoadMore: boolean = false;

  @Output() loadMore = new EventEmitter();

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  onLoadMore() {
    this.loadMore.emit();
  }

  async showDetail(movieId: number) {
    const modal = await this.modalCtrl.create({
      component: DetailComponent,
      componentProps: {
        movieId,
      },
    });

    modal.present();
  }
}
