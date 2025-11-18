import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ConsultorService } from '../../../shared/services/consultorService';
import { DemandaService } from '../../../shared/services/demanda-service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-adicionar-demanda',
  imports: [ReactiveFormsModule],
  templateUrl: './modal-adicionar-demanda.html',
  styleUrl: './modal-adicionar-demanda.scss',
})
export class ModalAdicionarDemanda {
  formulario!: FormGroup;

  constructor(private fb: FormBuilder, private activeModal: NgbActiveModal) {}

  ngOnInit() {
    this.formulario = this.fb.group({
      descricao: ['', Validators.required],
      status: ['', Validators.required],
    });
  }

  acaoAdicionar() {
    let value = this.formulario.value;
    if (this.formulario.valid) {
      this.activeModal.close(value);
    } else {
      this.formulario.markAllAsTouched();
    }
  }
}
