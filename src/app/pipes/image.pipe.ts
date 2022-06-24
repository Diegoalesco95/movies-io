import { Pipe, PipeTransform } from '@angular/core';

import { environment } from 'src/environments/environment';

const IMAGE_URL = environment.imagePath;
const NO_IMAGE_URL = '/assets/img/no-image-banner.jpg';

@Pipe({
  name: 'image',
})
export class ImagePipe implements PipeTransform {
  transform(img: string, size = 'w500'): string | void {
    if (img) {
      const imgUrl = `${IMAGE_URL}${size}${img}`;
      return imgUrl;
    }
    return NO_IMAGE_URL;
  }
}
