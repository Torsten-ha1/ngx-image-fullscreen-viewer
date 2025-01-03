import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxHabaImageViewerComponent } from './ngx-haba-image-viewer.component';

describe('NgxHabaImageViewerComponent', () => {
  let component: NgxHabaImageViewerComponent;
  let fixture: ComponentFixture<NgxHabaImageViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxHabaImageViewerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxHabaImageViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
