import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCancelar } from './modal-cancelar';

describe('ModalCancelar', () => {
  let component: ModalCancelar;
  let fixture: ComponentFixture<ModalCancelar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCancelar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCancelar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
