import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxImageFullscreenViewerComponent } from './ngx-image-fullscreen-viewer.component';

describe('NgxImageFullscreenViewerComponent', () => {
  let component: NgxImageFullscreenViewerComponent;
  let fixture: ComponentFixture<NgxImageFullscreenViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxImageFullscreenViewerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxImageFullscreenViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
