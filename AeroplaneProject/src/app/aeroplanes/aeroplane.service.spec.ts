import { TestBed } from '@angular/core/testing';

import { AeroplaneService } from './aeroplane.service';

describe('AeroplaneService', () => {
  let service: AeroplaneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AeroplaneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
