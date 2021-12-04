import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearProveedorContratistaComponent } from './crear-proveedor-contratista.component';

describe('CrearProveedorContratistaComponent', () => {
  let component: CrearProveedorContratistaComponent;
  let fixture: ComponentFixture<CrearProveedorContratistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearProveedorContratistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearProveedorContratistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
