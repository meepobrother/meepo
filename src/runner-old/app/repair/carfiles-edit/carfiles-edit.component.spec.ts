import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarfilesEditComponent } from './carfiles-edit.component';

describe('CarfilesEditComponent', () => {
  let component: CarfilesEditComponent;
  let fixture: ComponentFixture<CarfilesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarfilesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarfilesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
