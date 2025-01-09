# NgxImageFullscreenViewer

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.0.

## Description

Angular Fullscreen Image Viewer

Works with images, youtube and videos.

This library is an update of [ng-image-fullscreen-viewer](https://www.npmjs.com/package/ng-image-fullscreen-view) to work with the newest Angular version and uses pure CSS for styling. Some enhancements and fixes are deployed.

IMPORTANT:
The viewer is needed to be presented with an object for the property `show`:

```typescript
{
  visibleFlag: boolean
  index?: number 
}
```

Where `index` is optional: If set the specified image is shown if ommited the viewer is reset to image index 0.

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
  [show]="{visibleFlag}"
  (close)="visibleFlag = false"
></lib-ngx-image-fullscreen-viewer>

<button (click)="visibleFlag = !visibleFlag">
  Open Fullscreen Viewer
</button>
```

Where `images` is an array of objects of e.g. following type:

```typescript
// ...
visibleFlag = false
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
