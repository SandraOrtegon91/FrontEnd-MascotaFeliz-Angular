import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAsesorVeterinarioComponent } from './crear-asesor-veterinario.component';

describe('CrearAsesorVeterinarioComponent', () => {
  let component: CrearAsesorVeterinarioComponent;
  let fixture: ComponentFixture<CrearAsesorVeterinarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearAsesorVeterinarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearAsesorVeterinarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
