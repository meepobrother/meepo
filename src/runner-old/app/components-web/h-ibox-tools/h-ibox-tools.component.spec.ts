import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HIboxToolsComponent } from './h-ibox-tools.component';

describe('HIboxToolsComponent', () => {
  let component: HIboxToolsComponent;
  let fixture: ComponentFixture<HIboxToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HIboxToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HIboxToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
