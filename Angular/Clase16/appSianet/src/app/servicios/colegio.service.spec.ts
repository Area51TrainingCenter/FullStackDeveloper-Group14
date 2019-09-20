import { TestBed } from '@angular/core/testing';

import { ColegioService } from './colegio.service';

describe('ColegioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ColegioService = TestBed.get(ColegioService);
    expect(service).toBeTruthy();
  });
});
