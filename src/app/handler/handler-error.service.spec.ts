import { TestBed } from '@angular/core/testing';

import { HandlerErrorService } from './handler-error.service';

describe('HandlerErrorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HandlerErrorService = TestBed.get(HandlerErrorService);
    expect(service).toBeTruthy();
  });
});
