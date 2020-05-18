import { TestBed } from '@angular/core/testing';

import { ProductstockserviceService } from './productstockservice.service';

describe('ProductstockserviceService', () => {
  let service: ProductstockserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductstockserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
