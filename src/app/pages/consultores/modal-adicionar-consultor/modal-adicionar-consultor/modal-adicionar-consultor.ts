import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ConsultorService } from '../../../../shared/services/consultorService';

@Component({
  selector: 'app-modal-adicionar-consultor',
  imports: [ReactiveFormsModule],
  templateUrl: './modal-adicionar-consultor.html',
  styleUrl: './modal-adicionar-consultor.scss',
})
export class ModalAdicionarConsultor {
  formulario!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: ConsultorService) {}

  ngOnInit() {
    this.formulario = this.fb.group({
      nome: ['', Validators.required],
      cargo: ['', Validators.required],
      username: ['' ,Validators.required],
      especialidade: ['IC'],
    });
  }

  acaoAdicionar() {
    let value = this.formulario.value;
    if (this.formulario.valid) {
      this.service.addConsultor(value).subscribe((result) => {
        console.log(result);
      });
    }else{
      this.formulario.markAllAsTouched()
    }

  }
}
