import { TestBed } from '@angular/core/testing';

import { EstateIdService } from './estate-id.service';

describe('EstateIdService', () => {
  let service: EstateIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstateIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
