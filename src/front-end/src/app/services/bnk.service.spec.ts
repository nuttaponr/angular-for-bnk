import { TestBed } from '@angular/core/testing';

import { BnkService } from './bnk.service';

describe('BnkService', () => {
  let service: BnkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BnkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
