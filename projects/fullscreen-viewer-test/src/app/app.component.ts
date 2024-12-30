import { Component } from '@angular/core';
import { NgxImageFullscreenViewerComponent } from 'ngx-image-fullscreen-viewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgxImageFullscreenViewerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'fullscreen-viewer-test';

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
  ];

  showFullscreen = false;
}
