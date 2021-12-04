import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarAsesorVeterinarioComponent } from './eliminar-asesor-veterinario.component';

describe('EliminarAsesorVeterinarioComponent', () => {
  let component: EliminarAsesorVeterinarioComponent;
  let fixture: ComponentFixture<EliminarAsesorVeterinarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarAsesorVeterinarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarAsesorVeterinarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
