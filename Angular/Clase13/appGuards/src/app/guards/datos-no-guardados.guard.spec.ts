import { TestBed, async, inject } from '@angular/core/testing';

import { DatosNoGuardadosGuard } from './datos-no-guardados.guard';

describe('DatosNoGuardadosGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatosNoGuardadosGuard]
    });
  });

  it('should ...', inject([DatosNoGuardadosGuard], (guard: DatosNoGuardadosGuard) => {
    expect(guard).toBeTruthy();
  }));
});
