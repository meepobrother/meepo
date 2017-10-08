import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopsJoinComponent } from './shops-join.component';

describe('ShopsJoinComponent', () => {
  let component: ShopsJoinComponent;
  let fixture: ComponentFixture<ShopsJoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopsJoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopsJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
