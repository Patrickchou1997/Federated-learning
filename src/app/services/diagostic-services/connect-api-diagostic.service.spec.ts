import { TestBed } from '@angular/core/testing';

import { ConnectApiDiagosticService } from './connect-api-diagostic.service';

describe('ConnectApiDiagosticService', () => {
  let service: ConnectApiDiagosticService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnectApiDiagosticService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
