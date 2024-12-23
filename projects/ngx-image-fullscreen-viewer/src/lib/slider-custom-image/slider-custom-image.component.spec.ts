import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderCustomImageComponent } from './slider-custom-image.component';

describe('SliderCustomImageComponent', () => {
  let component: SliderCustomImageComponent;
  let fixture: ComponentFixture<SliderCustomImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderCustomImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderCustomImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
