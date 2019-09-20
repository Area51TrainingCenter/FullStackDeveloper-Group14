import { TestBed } from '@angular/core/testing';

import { NotaService } from './nota.service';

describe('NotaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotaService = TestBed.get(NotaService);
    expect(service).toBeTruthy();
  });
});
