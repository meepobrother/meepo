import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMapPositionComponent } from './home-map-position.component';

describe('HomeMapPositionComponent', () => {
  let component: HomeMapPositionComponent;
  let fixture: ComponentFixture<HomeMapPositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeMapPositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMapPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
