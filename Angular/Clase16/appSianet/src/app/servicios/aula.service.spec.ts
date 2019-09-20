import { TestBed } from '@angular/core/testing';

import { AulaService } from './aula.service';

describe('AulaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AulaService = TestBed.get(AulaService);
    expect(service).toBeTruthy();
  });
});
