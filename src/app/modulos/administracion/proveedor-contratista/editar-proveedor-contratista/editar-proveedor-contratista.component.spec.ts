import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarProveedorContratistaComponent } from './editar-proveedor-contratista.component';

describe('EditarProveedorContratistaComponent', () => {
  let component: EditarProveedorContratistaComponent;
  let fixture: ComponentFixture<EditarProveedorContratistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarProveedorContratistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarProveedorContratistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
