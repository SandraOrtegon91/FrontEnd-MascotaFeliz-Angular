import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarAsesorVeterinarioComponent } from './buscar-asesor-veterinario.component';

describe('BuscarAsesorVeterinarioComponent', () => {
  let component: BuscarAsesorVeterinarioComponent;
  let fixture: ComponentFixture<BuscarAsesorVeterinarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarAsesorVeterinarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarAsesorVeterinarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
