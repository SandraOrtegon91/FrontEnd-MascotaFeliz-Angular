import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAsesorVeterinarioComponent } from './editar-asesor-veterinario.component';

describe('EditarAsesorVeterinarioComponent', () => {
  let component: EditarAsesorVeterinarioComponent;
  let fixture: ComponentFixture<EditarAsesorVeterinarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarAsesorVeterinarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarAsesorVeterinarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
