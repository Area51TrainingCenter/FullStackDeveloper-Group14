import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorcursoComponent } from './porcurso.component';

describe('PorcursoComponent', () => {
  let component: PorcursoComponent;
  let fixture: ComponentFixture<PorcursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorcursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorcursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
