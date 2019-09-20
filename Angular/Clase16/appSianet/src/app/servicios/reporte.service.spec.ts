import { TestBed } from '@angular/core/testing';

import { ReporteService } from './reporte.service';

describe('ReporteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReporteService = TestBed.get(ReporteService);
    expect(service).toBeTruthy();
  });
});
