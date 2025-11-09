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
}
