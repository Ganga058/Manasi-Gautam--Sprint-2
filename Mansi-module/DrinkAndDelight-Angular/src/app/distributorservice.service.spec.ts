import { TestBed } from '@angular/core/testing';

import { DistributorserviceService } from './distributorservice.service';

describe('DistributorserviceService', () => {
  let service: DistributorserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DistributorserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
