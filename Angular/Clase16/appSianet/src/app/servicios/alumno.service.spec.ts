import { TestBed } from '@angular/core/testing';

import { AlumnoService } from './alumno.service';

describe('AlumnoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlumnoService = TestBed.get(AlumnoService);
    expect(service).toBeTruthy();
  });
});
