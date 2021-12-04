import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarProveedorContratistaComponent } from './eliminar-proveedor-contratista.component';

describe('EliminarProveedorContratistaComponent', () => {
  let component: EliminarProveedorContratistaComponent;
  let fixture: ComponentFixture<EliminarProveedorContratistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarProveedorContratistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarProveedorContratistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
