import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AeroplaneAddComponent } from './aeroplane-add.component';

describe('AeroplaneAddComponent', () => {
  let component: AeroplaneAddComponent;
  let fixture: ComponentFixture<AeroplaneAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AeroplaneAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AeroplaneAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
