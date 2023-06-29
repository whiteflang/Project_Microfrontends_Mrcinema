import { TestBed } from '@angular/core/testing';

import { CinemaSdkService } from './cinema-sdk.service';

describe('CinemaSdkService', () => {
  let service: CinemaSdkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CinemaSdkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
