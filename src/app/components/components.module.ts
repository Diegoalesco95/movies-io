import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { PipesModule } from 'src/app/pipes/pipes.module';

import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';

@NgModule({
  declarations: [SlideshowBackdropComponent, SlideshowPosterComponent],
  imports: [CommonModule, IonicModule.forRoot(), PipesModule],
  exports: [SlideshowBackdropComponent, SlideshowPosterComponent],
})
export class ComponentsModule {}
