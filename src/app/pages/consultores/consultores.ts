import { Component } from '@angular/core';
import { ConsultorBox } from '../../shared/components/consultor-box/consultor-box';
import { CommonModule } from '@angular/common';
import { Consultor, ConsultorOutputDTO } from '../../shared/models/ConsultorModel';
import { ConsultorService } from '../../shared/services/consultorService';
import { ModalAdicionarConsultor } from './modal-adicionar-consultor/modal-adicionar-consultor/modal-adicionar-consultor';
import { ModalService } from '../../shared/util/modal-service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-consultores',
  imports: [ConsultorBox, CommonModule],
  templateUrl: './consultores.html',
  styleUrl: './consultores.scss',
})
export class Consultores {
  constructor(private service: ConsultorService, private modalService: NgbModal) {}
  consultores: Consultor[] = [];

  ngOnInit() {
    this.acaoConsultar();
  }

  acaoConsultar() {
    this.service.getAll().subscribe({
      next: (data) => {
        console.log(data);

        this.consultores = data;
      },
      error: (error) => console.error(error),
    });
  }

  addConsultor() {
    this.modalService
      .open(ModalAdicionarConsultor, {
        backdrop: 'static', // Changed to 'static' to "stand out"
        keyboard: true,
        size: 'lg',

        // The new styling options
        centered: true,
      })
      .result.then((result: ConsultorOutputDTO) => {
        this.service.addConsultor(result).subscribe({ 
          next: (data) => {
            console.log('Consultor adicionado:', data);
            this.acaoConsultar(); // Recarrega a lista de consultores após adicionar
          },
          error: (error) => console.error('Erro ao adicionar consultor:', error),
        });
      });
  }

  
}
