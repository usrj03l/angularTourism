import { TestBed } from '@angular/core/testing';

import { DistDataService } from './dist-data.service';

describe('DistDataService', () => {
  let service: DistDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DistDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
