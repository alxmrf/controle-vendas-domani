import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAdicionarConsultor } from './modal-adicionar-consultor';

describe('ModalAdicionarConsultor', () => {
  let component: ModalAdicionarConsultor;
  let fixture: ComponentFixture<ModalAdicionarConsultor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalAdicionarConsultor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAdicionarConsultor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
