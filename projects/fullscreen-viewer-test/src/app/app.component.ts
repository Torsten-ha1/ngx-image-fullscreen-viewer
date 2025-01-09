import { Component } from '@angular/core';
import { NgxImageFullscreenViewerComponent } from 'ngx-image-fullscreen-viewer';
import { NgxHabaImageViewerComponent } from 'ngx-haba-image-viewer';

@Component({
    selector: 'app-root',
    imports: [NgxImageFullscreenViewerComponent, NgxHabaImageViewerComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fullscreen-viewer-test';

  imageIndex = 1;

  resetIndex = true;

  images = [
    {
      image:
        'https://fastly.picsum.photos/id/613/536/354.jpg?hmac=f8WsBPQbUfhqaTEyLASnu4NMkTbyljMVVgXlU9CNDyk',
      title: 'Image 1',
      alt: 'Image 1',
    },
    {
      image:
        'https://fastly.picsum.photos/id/567/536/354.jpg?hmac=s5tVi7c1-6xVRcvryVxRWMFZK7uAkqhbcy3_mHVO94E',
      title: 'Image 2',
      alt: 'Image 2',
    },
    {
      image:
        'https://fastly.picsum.photos/id/364/536/354.jpg?hmac=3O0ojRh7NNfYP6PiPhbnupymAgRh1IUj7FK5zAOtrws',
      title: 'Image 3',
      alt: 'Image 3',
    },
    {
      image:
        'https://fastly.picsum.photos/id/613/536/354.jpg?hmac=f8WsBPQbUfhqaTEyLASnu4NMkTbyljMVVgXlU9CNDyk',
      title: 'Image 1',
      alt: 'Image 1',
    },
    {
      image: 'https://picsum.photos/200/300?grayscale',
      title: 'Image 2',
      alt: 'Image 2',
    },
    {
      image:
        'https://fastly.picsum.photos/id/364/536/354.jpg?hmac=3O0ojRh7NNfYP6PiPhbnupymAgRh1IUj7FK5zAOtrws',
      title: 'Image 3',
      alt: 'Image 3',
    },
    {
      image:
        'https://fastly.picsum.photos/id/613/536/354.jpg?hmac=f8WsBPQbUfhqaTEyLASnu4NMkTbyljMVVgXlU9CNDyk',
      title: 'Image 1',
      alt: 'Image 1',
    },
    {
      image:
        'https://fastly.picsum.photos/id/567/536/354.jpg?hmac=s5tVi7c1-6xVRcvryVxRWMFZK7uAkqhbcy3_mHVO94E',
      title: 'Image 2',
      alt: 'Image 2',
    },
    {
      image:
        'https://fastly.picsum.photos/id/364/536/354.jpg?hmac=3O0ojRh7NNfYP6PiPhbnupymAgRh1IUj7FK5zAOtrws',
      title: 'Image 3',
      alt: 'Image 3',
    },
  ];

  showFullscreen = false;
}
