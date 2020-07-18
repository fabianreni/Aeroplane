import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AeroplaneEditComponent } from './aeroplane-edit.component';

describe('AeroplaneEditComponent', () => {
  let component: AeroplaneEditComponent;
  let fixture: ComponentFixture<AeroplaneEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AeroplaneEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AeroplaneEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
