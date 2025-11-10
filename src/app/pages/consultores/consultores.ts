import { Component } from '@angular/core';
import { ConsultorBox } from '../../shared/components/consultor-box/consultor-box';
import { CommonModule } from '@angular/common';
import { Consultor, ConsultorOutputDTO } from '../../shared/models/ConsultorModel';
import { ConsultorService } from '../../shared/services/consultorService';

@Component({
  selector: 'app-consultores',
  imports: [ConsultorBox, CommonModule],
  templateUrl: './consultores.html',
  styleUrl: './consultores.scss',
})
export class Consultores {
  constructor(private service: ConsultorService) {}
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
    let newConsultor: ConsultorOutputDTO = {
      nome: 'Novo Consultor',
      cargo: 'Cargo Exemplo',
      area: 'Area Exemplo',
      username: 'novo.consultor'
    };


    this.service.addConsultor(newConsultor).subscribe({
      next: (data) => {
        console.log('Consultor adicionado:', data);
        this.acaoConsultar(); // Recarrega a lista de consultores após adicionar
      },
      error: (error) => console.error('Erro ao adicionar consultor:', error),
    });
  }
}
