import { CommonModule } from '@angular/common';
import { HostListener, Renderer2 } from '@angular/core';
import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';

export interface Image {
  image: string;
  alt: string;
  title: string;
}

@Component({
    selector: 'ngx-stack-image-viewer',
    templateUrl: './ngx-haba-image-viewer.component.html',
    styleUrls: ['./ngx-haba-image-viewer.component.css'],
    imports: [CommonModule]
})
export class NgxHabaImageViewerComponent implements OnInit, AfterViewInit {
  @Input() theImages: Array<Image> = [];
  @Input() theThumbImages: Array<Image> = [];
  @Input() transitionDuration: number = 0.9;
  @Input() previewImageBorderColor: string = '#ad1624';
  @Input() maxWidth: string = '100%';
  @Input() previewImageWidth: number = 100;
  @Input() previewImageGap: number = 0;
  @Input() paginationShow: boolean = true;
  @Input() previewImageBorderWidth: number = 2;

  image: HTMLImageElement = new Image();
  selectedIndex = 0;

  images: Array<HTMLImageElement> = [];

  // image stack structure
  imageStack = {
    images: [],
    imageIndex: 0,
    prevIndex: 0,
    nextIndex: 0,
  };

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.updateScreenSize();
  }

  loadingReady = false;
  loading = true;

  @ViewChild('scrollableContent', { read: ElementRef })
  public scrollableContent!: ElementRef;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    // preload images
  }

  private onImagesPreloaded() {
    console.log('onImagesPreloaded');
    this.loadingReady = true;
    setTimeout(() => {
      this.loading = false;
    }, this.transitionDuration * 1000);

    this.setImage(this.selectedIndex);
    this.updateScreenSize();

    setTimeout(() => {
      const container = document.getElementsByClassName('image-preview')[0];

      if (container) {
        container.setAttribute('style', `gap: ${this.previewImageGap}px`);
      }
    }, 100);
  }

  private setImage(index: number, left: boolean = false) {
    const imgContainer = document.getElementById('image-container');

    const indexDiff = this.selectedIndex - index;

    this.imageStack.prevIndex = this.selectedIndex;
    this.imageStack.imageIndex = index;

    console.log('indexDiff:', indexDiff);

    if (indexDiff < 0) {
      // navigated right in preview
      // move indexDiff images to the right (left = 0)
    } else {
      // navigated left in preview
    }

    console.log('imgContainer:', imgContainer);

    if (imgContainer) {
      const oldRef = this.image;

      this.image = this.images[index];

      if (!left) {
        imgContainer.insertBefore(this.image, oldRef.nextElementSibling);
        // this.image.style.left = '0';
      } else {
        imgContainer.insertBefore(this.image, oldRef);
        // oldRef.style.left = '-102%';
      }

      // if (!left) {
      //   setTimeout(() => {
      //     this.image.style.left = '0';
      //     // oldRef.style.left = '-102%';
      //   }, 0);
      // } else {
      //   oldRef.style.left = '-102%';

      //   // setTimeout(() => {
      //   //   // imgContainer.removeChild(oldRef);
      //   // }, this.transitionDuration * 1000);
      // }

      // oldRef.style.left = '-100%';

      // move old image out of view
      // if (left) {
      //   // this.image.style.left = left ? '100%' : '-100%';
      // }

      // nav via btns
      // if (indexDiff === 0) {
      if (!left) {
        setTimeout(() => {
          this.image.style.left = '0';
        }, 0);
      } else {
        oldRef.style.left = '-102%';
        setTimeout(() => {
          // imgContainer.removeChild(oldRef);
        }, this.transitionDuration * 1000);
      }
      // }

      // this.image.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  private updateScreenSize(): void {
    console.log('updateScreenSize');
    // align preview bar at bottom of image
    // align nav buttons left/right in the middle of the image
    const container = document.getElementsByClassName('main-image-wrapper')[0];
    if (container) {
      const imgHeight = this.image.height;
      container.setAttribute('style', `height: ${imgHeight}px`);

      // const btns = document.getElementsByClassName('nav-btn');

      // console.log('btns:', btns);

      // if (btns.length > 0) {
      //   const btn = btns[0] as HTMLElement;
      //   btn.setAttribute('style', `top: ${imgHeight / 2}px`);
      //   const btn2 = btns[1] as HTMLElement;
      //   btn.setAttribute('style', `top: ${imgHeight / 2}px`);
      // }
    }
  }

  ngAfterViewInit() {
    this.outlineForImageAtIndex(this.selectedIndex);

    // set max width of component
    const container = document.getElementsByClassName(
      'ngx-stack-image-viewer'
    )[0];

    if (container) {
      container.setAttribute('style', `max-width: ${this.maxWidth}`);
    }

    let imagesLoaded = 0;

    // const imgContainer = document.getElementById('image-container');

    this.theImages.forEach((img: Image) => {
      const image = new Image();
      image.src = img.image;
      image.style.position = 'absolute';
      image.style.left = '-102%';
      image.style.width = '100%';
      image.style.transition =
        'left ' + this.transitionDuration + 's ease-in-out';

      let done = false;

      image.onload = (img) => {
        console.log('image loaded: ', img.target);
        imagesLoaded++;

        // measure image
        if (!done) {
          const imgHeight = image.height;
          document
            .getElementsByClassName('main-image-wrapper')[0]
            ?.setAttribute('style', `height: ${imgHeight}px`);

          done = true;
        }
        if (imagesLoaded === this.theImages.length) {
          this.onImagesPreloaded();
        }
      };

      const cont = document.getElementById('image-container');
      this.images.push(image as HTMLImageElement);

      // console.log('cont:', cont);

      cont?.appendChild(image as HTMLImageElement);
    });

    this.selectedIndex = 0;
  }

  prevImage() {
    this.outlineForImageAtIndex(this.selectedIndex, false);
    this.setIndex('prev');
    this.setImage(this.selectedIndex, true);
    this.outlineForImageAtIndex(this.selectedIndex);
    this.scrollLeft();
  }

  nextImage() {
    this.outlineForImageAtIndex(this.selectedIndex, false);
    this.setIndex('next');
    this.setImage(this.selectedIndex);
    this.outlineForImageAtIndex(this.selectedIndex);
    this.scrollRight();
  }

  showImage(index: number) {
    this.setImage(index);

    // scroll preview list
    if (this.selectedIndex < index) {
      this.scrollRight();
    } else if (this.selectedIndex > index) {
      this.scrollLeft();
    }

    console.log('this.selectedIndex < index:', this.selectedIndex < index);

    this.outlineForImageAtIndex(this.selectedIndex, false);
    this.outlineForImageAtIndex(index);

    this.selectedIndex = index;
  }

  public scrollRight(): void {
    this.scrollableContent.nativeElement.scrollTo({
      left: this.scrollableContent.nativeElement.scrollLeft + 110,
      behavior: 'smooth',
    });
  }

  public scrollLeft(): void {
    this.scrollableContent.nativeElement.scrollTo({
      left: this.scrollableContent.nativeElement.scrollLeft - 110,
      behavior: 'smooth',
    });
  }

  private scrollToEnd(): void {
    this.scrollableContent.nativeElement.scrollTo({
      left: this.scrollableContent.nativeElement.scrollWidth,
      behavior: 'smooth',
    });
  }

  private scrollToStart(): void {
    this.scrollableContent.nativeElement.scrollTo({
      left: 0,
      behavior: 'smooth',
    });
  }

  private setIndex(prevOrNext: string) {
    if (prevOrNext === 'prev') {
      if (this.selectedIndex > 0) {
        this.selectedIndex--;
      } else {
        // this.selectedIndex = this.allImageUris.length - 1
        // this.scrollToEnd()
      }
    }

    if (prevOrNext === 'next') {
      if (this.selectedIndex < this.images.length - 1) {
        this.selectedIndex++;
      } else {
        // this.selectedIndex = 0
        // this.scrollToStart()
      }
    }

    // cycling
    // if (this.selectedIndex < 0) {
    // 	this.selectedIndex = this.allImageUris.length - 1
    // } else if (this.selectedIndex > this.allImageUris.length - 1) {
    // 	this.selectedIndex = 0
    // }
  }

  private outlineForImageAtIndex(index: number, border = true) {
    const ele = document.getElementById(String('img-' + index));

    if (ele === null) return;

    if (border) {
      // ele.style.outlineStyle = 'solid';
      // ele.style.outlineWidth = '2px';
      // ele.style.outlineColor = this.previewImageBorderColor;
      ele.style.borderBottom =
        this.previewImageBorderWidth +
        'px solid ' +
        this.previewImageBorderColor;
    } else {
      ele.style.borderBottom = '0px';
    }
  }
}
