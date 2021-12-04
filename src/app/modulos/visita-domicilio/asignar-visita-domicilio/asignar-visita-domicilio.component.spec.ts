import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarVisitaDomicilioComponent } from './asignar-visita-domicilio.component';

describe('AsignarVisitaDomicilioComponent', () => {
  let component: AsignarVisitaDomicilioComponent;
  let fixture: ComponentFixture<AsignarVisitaDomicilioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarVisitaDomicilioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarVisitaDomicilioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
