import { TestBed } from '@angular/core/testing';

import { AutorizacionService } from './autorizacion.service';

describe('AutorizacionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutorizacionService = TestBed.get(AutorizacionService);
    expect(service).toBeTruthy();
  });
});
