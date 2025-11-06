import { Component } from '@angular/core';
import { ConsultorBox } from '../../shared/components/consultor-box/consultor-box';
import { CommonModule } from '@angular/common';
import { Consultor } from '../../shared/models/ConsultorModel';
import { ConsultorService } from '../../shared/services/consultorService';

@Component({
  selector: 'app-consultores',
  imports: [ConsultorBox, CommonModule],
  templateUrl: './consultores.html',
  styleUrl: './consultores.scss',
})
export class Consultores {

  constructor(private service:ConsultorService){}
  consultores: Consultor[] = [
    {
      nome: 'julio',
      cargo: 'consultor',
      atividades: ['pps', 'Cuidar de lead'],
    },
    {
      nome: 'Renata',
      cargo: 'Coordenadora',
      atividades: ['pps', 'Cuidar de lead'],
    },
    {
      nome: 'reschke',
      cargo: 'gerente',
      atividades: ['pps', 'Cuidar de lead'],
    },
  ];


  acaoConsultar(){
    this.service.getAll().subscribe({
      next: (data) => console.log(data),
      error: (error) => console.error(error)
    });
  }


}
