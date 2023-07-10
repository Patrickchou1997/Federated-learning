import { TestBed } from '@angular/core/testing';

import { FeedDataDiagosticService } from './feed-data-diagostic.service';

describe('FeedDataDiagosticService', () => {
  let service: FeedDataDiagosticService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeedDataDiagosticService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
