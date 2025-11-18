import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAdicionarDemanda } from './modal-adicionar-demanda';

describe('ModalAdicionarDemanda', () => {
  let component: ModalAdicionarDemanda;
  let fixture: ComponentFixture<ModalAdicionarDemanda>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalAdicionarDemanda]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAdicionarDemanda);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
