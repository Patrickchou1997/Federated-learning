import { TestBed } from '@angular/core/testing';

import { DentistryService } from './dentistry.service';

describe('DentistryService', () => {
  let service: DentistryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DentistryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
