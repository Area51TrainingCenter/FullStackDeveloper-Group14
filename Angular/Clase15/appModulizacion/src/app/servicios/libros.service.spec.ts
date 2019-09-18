import { TestBed } from '@angular/core/testing';

import { LibrosService } from './libros.service';

describe('LibrosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibrosService = TestBed.get(LibrosService);
    expect(service).toBeTruthy();
  });
});
