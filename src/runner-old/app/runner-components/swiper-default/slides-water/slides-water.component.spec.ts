import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidesWaterComponent } from './slides-water.component';

describe('SlidesWaterComponent', () => {
  let component: SlidesWaterComponent;
  let fixture: ComponentFixture<SlidesWaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidesWaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidesWaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
