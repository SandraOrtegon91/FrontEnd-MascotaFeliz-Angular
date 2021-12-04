import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarProveedorContratistaComponent } from './buscar-proveedor-contratista.component';

describe('BuscarProveedorContratistaComponent', () => {
  let component: BuscarProveedorContratistaComponent;
  let fixture: ComponentFixture<BuscarProveedorContratistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarProveedorContratistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarProveedorContratistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
