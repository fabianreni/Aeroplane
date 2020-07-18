import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AeroplaneDeleteComponent } from './aeroplane-delete.component';

describe('AeroplaneDeleteComponent', () => {
  let component: AeroplaneDeleteComponent;
  let fixture: ComponentFixture<AeroplaneDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AeroplaneDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AeroplaneDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
