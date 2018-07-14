import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NglistComponent } from './nglist.component';

describe('NglistComponent', () => {
  let component: NglistComponent;
  let fixture: ComponentFixture<NglistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NglistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
