import { TestBed, async, inject } from '@angular/core/testing';

import { AutenticacionGuard } from './autenticacion.guard';

describe('AutenticacionGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutenticacionGuard]
    });
  });

  it('should ...', inject([AutenticacionGuard], (guard: AutenticacionGuard) => {
    expect(guard).toBeTruthy();
  }));
});
