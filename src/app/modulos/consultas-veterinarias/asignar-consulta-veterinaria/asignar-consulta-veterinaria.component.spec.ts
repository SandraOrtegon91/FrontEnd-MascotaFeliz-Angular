import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarConsultaVeterinariaComponent } from './asignar-consulta-veterinaria.component';

describe('AsignarConsultaVeterinariaComponent', () => {
  let component: AsignarConsultaVeterinariaComponent;
  let fixture: ComponentFixture<AsignarConsultaVeterinariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarConsultaVeterinariaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarConsultaVeterinariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
