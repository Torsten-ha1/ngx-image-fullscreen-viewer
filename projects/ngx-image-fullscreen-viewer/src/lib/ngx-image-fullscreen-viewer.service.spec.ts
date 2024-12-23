import { TestBed } from '@angular/core/testing';

import { NgxImageFullscreenViewerService } from './ngx-image-fullscreen-viewer.service';

describe('NgxImageFullscreenViewerService', () => {
  let service: NgxImageFullscreenViewerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxImageFullscreenViewerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
