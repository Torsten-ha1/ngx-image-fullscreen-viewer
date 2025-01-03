import { TestBed } from '@angular/core/testing';

import { NgxHabaImageViewerService } from './ngx-haba-image-viewer.service';

describe('NgxHabaImageViewerService', () => {
  let service: NgxHabaImageViewerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxHabaImageViewerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
