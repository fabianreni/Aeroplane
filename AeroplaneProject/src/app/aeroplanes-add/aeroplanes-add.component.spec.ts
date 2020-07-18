import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AeroplanesAddComponent } from './aeroplanes-add.component';

describe('AeroplanesAddComponent', () => {
  let component: AeroplanesAddComponent;
  let fixture: ComponentFixture<AeroplanesAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AeroplanesAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AeroplanesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
