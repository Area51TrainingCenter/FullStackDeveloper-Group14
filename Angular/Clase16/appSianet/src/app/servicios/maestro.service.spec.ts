import { TestBed } from '@angular/core/testing';

import { MaestroService } from './maestro.service';

describe('MaestroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MaestroService = TestBed.get(MaestroService);
    expect(service).toBeTruthy();
  });
});
