import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiempoComponent } from './tiempo.component';

describe('TiempoComponent', () => {
  let component: TiempoComponent;
  let fixture: ComponentFixture<TiempoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiempoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiempoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
