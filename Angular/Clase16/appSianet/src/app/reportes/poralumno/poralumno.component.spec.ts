import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoralumnoComponent } from './poralumno.component';

describe('PoralumnoComponent', () => {
  let component: PoralumnoComponent;
  let fixture: ComponentFixture<PoralumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoralumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoralumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
