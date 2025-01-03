# NgxImageFullscreenViewer

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.0.

## Description

Angular Fullscreen Image Viewer

This library is an update of [ng-image-fullscreen-viewer](https://www.npmjs.com/package/ng-image-fullscreen-view) to work with the newest Angular version and uses pure CSS for styling. So refer to the original project for further documentation.
I am planing on adding additional features per my demand an will publish and document them here.

## Install

```bash
npm install ngx-image-fullscreen-viewer
```

## Usage

Import in Module or Component file:

```bash
import { NgxImageFullscreenViewerComponent } from 'ngx-image-fullscreen-viewer'
```

and add to imports array.

In template:

```html
<lib-ngx-image-fullscreen-viewer
  [images]="images"
  [paginationShow]="true"
  [show]="showFullscreen"
  (close)="showFullscreen = false"
></lib-ngx-image-fullscreen-viewer>

<button (click)="showFullscreen = !showFullscreen">
  Open Fullscreen Viewer
</button>
```

Where `images` is an array of objects of e.g. following type:

```typescript
// ...
showFullscreen = false
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
// ...
```

## Further help

For questions send an email and feel free to make pull requests.
