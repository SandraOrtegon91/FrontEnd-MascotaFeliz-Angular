import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarPagoPlanesComponent } from './asignar-pago-planes.component';

describe('AsignarPagoPlanesComponent', () => {
  let component: AsignarPagoPlanesComponent;
  let fixture: ComponentFixture<AsignarPagoPlanesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarPagoPlanesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarPagoPlanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
