import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgxImageFullscreenViewerService } from '../ngx-image-fullscreen-viewer.service';
import { CommonModule } from '@angular/common';

const youtubeRegExp =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/,
  validFileExtensions = ['jpeg', 'jpg', 'gif', 'png'],
  validVideoExtensions = ['mp4'];

@Component({
    selector: 'custom-img',
    imports: [CommonModule],
    templateUrl: './slider-custom-image.component.html',
    styleUrl: './slider-custom-image.component.scss'
})
export class SliderCustomImageComponent {
  YOUTUBE = 'youtube';
  IMAGE = 'image';
  VIDEO = 'video';
  fileUrl: SafeResourceUrl = '';
  fileExtension = '';
  type = this.IMAGE;

  // @inputs
  @Input() videoAutoPlay: boolean = false;
  @Input() showVideoControls: number = 1;
  @Input()
  set imageUrl(url: string) {
    if (url && typeof url === 'string') {
      this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
      const splitUrl = url.split(/[#?]/)[0].split('.');
      const extension = splitUrl.length > 0 ? splitUrl.pop() : '';
      this.fileExtension = extension ? extension.trim() : '';
      if (
        this.imageFullscreenViewService.base64FileExtension(url) &&
        (validFileExtensions.indexOf(
          this.imageFullscreenViewService.base64FileExtension(url).toLowerCase()
        ) > -1 ||
          validVideoExtensions.indexOf(
            this.imageFullscreenViewService
              .base64FileExtension(url)
              .toLowerCase()
          ) > -1)
      ) {
        this.fileExtension =
          this.imageFullscreenViewService.base64FileExtension(url);
      }
      // verify for youtube url
      const match = url.match(youtubeRegExp);
      if (match && match[2].length === 11) {
        this.type = this.YOUTUBE;
        this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
          `${'//www.youtube.com/embed/'}${match[2]}${
            this.videoAutoPlay
              ? '?autoplay=1&enablejsapi=1'
              : '?autoplay=0&enablejsapi=1'
          }${'&controls='}${this.showVideoControls}`
        );
      } else if (
        this.fileExtension &&
        validFileExtensions.indexOf(this.fileExtension.toLowerCase()) > -1
      ) {
        this.type = this.IMAGE;
      } else if (
        this.fileExtension &&
        validVideoExtensions.indexOf(this.fileExtension.toLowerCase()) > -1
      ) {
        this.type = this.VIDEO;
      }
    }
  }
  @Input() isVideo = false;
  @Input() alt: String = '';
  @Input() title: String = '';
  @Input() direction: string = 'ltr';

  constructor(
    public imageFullscreenViewService: NgxImageFullscreenViewerService,
    private sanitizer: DomSanitizer
  ) {}

  videoClickHandler(event: any) {
    if (event && event.srcElement && !this.showVideoControls) {
      if (event.srcElement.paused) {
        event.srcElement.play();
      } else {
        event.srcElement.pause();
      }
    }
  }
}
