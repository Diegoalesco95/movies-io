import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { PipesModule } from 'src/app/pipes/pipes.module';

import { DetailComponent } from './detail/detail.component';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';

@NgModule({
  declarations: [
    DetailComponent,
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
  ],
  imports: [CommonModule, IonicModule.forRoot(), PipesModule],
  exports: [
    DetailComponent,
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
  ],
})
export class ComponentsModule {}
