import { TestBed } from '@angular/core/testing';

import { LayermsgService } from './layermsg.service';

describe('LayermsgService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LayermsgService = TestBed.get(LayermsgService);
    expect(service).toBeTruthy();
  });
});
