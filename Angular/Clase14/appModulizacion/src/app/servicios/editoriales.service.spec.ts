import { TestBed } from '@angular/core/testing';

import { EditorialesService } from './editoriales.service';

describe('EditorialesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditorialesService = TestBed.get(EditorialesService);
    expect(service).toBeTruthy();
  });
});
