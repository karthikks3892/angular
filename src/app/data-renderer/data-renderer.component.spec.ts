import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRendererComponent } from './data-renderer.component';

describe('DataRendererComponent', () => {
  let component: DataRendererComponent;
  let fixture: ComponentFixture<DataRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
