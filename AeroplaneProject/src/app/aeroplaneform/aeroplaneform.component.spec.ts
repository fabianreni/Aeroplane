import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AeroplaneformComponent } from './aeroplaneform.component';

describe('AeroplaneformComponent', () => {
  let component: AeroplaneformComponent;
  let fixture: ComponentFixture<AeroplaneformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AeroplaneformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AeroplaneformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
