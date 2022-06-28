import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { Movie } from 'src/app/models/movies.models';
import { DetailComponent } from 'src/app/components/detail/detail.component';

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

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

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
