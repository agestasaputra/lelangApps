import { TestBed } from '@angular/core/testing';

import { LelangService } from './lelang.service';

describe('LelangService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LelangService = TestBed.get(LelangService);
    expect(service).toBeTruthy();
  });
});
