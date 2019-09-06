import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoAutenticadoComponent } from './no-autenticado.component';

describe('NoAutenticadoComponent', () => {
  let component: NoAutenticadoComponent;
  let fixture: ComponentFixture<NoAutenticadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoAutenticadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoAutenticadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
