import { TestBed } from '@angular/core/testing';

import { ExcluidCustomerService } from './excluid-customer.service';

describe('ExcluidCustomerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExcluidCustomerService = TestBed.get(ExcluidCustomerService);
    expect(service).toBeTruthy();
  });
});
