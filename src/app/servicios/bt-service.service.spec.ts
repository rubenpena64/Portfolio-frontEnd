import { TestBed } from '@angular/core/testing';

import { BtServiceService } from './bt-service.service';

describe('BtServiceService', () => {
  let service: BtServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BtServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
