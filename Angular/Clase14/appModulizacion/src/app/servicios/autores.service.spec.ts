import { TestBed } from '@angular/core/testing';

import { AutoresService } from './autores.service';

describe('AutoresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutoresService = TestBed.get(AutoresService);
    expect(service).toBeTruthy();
  });
});
