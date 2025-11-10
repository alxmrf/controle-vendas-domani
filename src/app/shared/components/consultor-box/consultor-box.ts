import { Component, Input } from '@angular/core';
import { Consultor } from '../../models/ConsultorModel';
import { CommonModule, NgStyle } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { DemandasOutputDTO } from '../../models/DemandasModel';
import { DemandaService } from '../../services/demanda-service';

@Component({
  selector: 'app-consultor-box',
  standalone: true,
  imports: [CommonModule, NgStyle, MatTableModule],
  templateUrl: './consultor-box.html',
  styleUrl: './consultor-box.scss',
})
export class ConsultorBox {
  acaoAdicionarLead() {
    throw new Error('Method not implemented.');
  }
  @Input() consultor!: Consultor;
  isExpanded: boolean = false;
  clickCounter!: { click: number; time: Date };
  demandasShowing: boolean = true;

  constructor(private demandaService: DemandaService) {}

  ngOnInit() {
    this.clickCounter = { click: 0, time: new Date() };
  }

  expandedSize = {
    width: '500px',
    height: '500px',
  };

  toggleIsExpanded() {
    if (!this.isExpanded) {
      this.isExpanded = true;
      this.clickCounter = { click: 0, time: new Date() };
      return;
    }
    if (this.clickCounter.click === 0) {
      this.clickCounter = { click: 1, time: new Date() };
    } else {
      const currentTime = new Date();
      const timeDiff = currentTime.getTime() - this.clickCounter.time.getTime();
      if (timeDiff < 200) {
        this.isExpanded = !this.isExpanded;
        this.clickCounter = { click: 0, time: new Date() };
      } else {
        this.clickCounter = { click: 1, time: new Date() };
      }
    }
  }

  handleDemandasShowing(status: boolean) {
    this.demandasShowing = status;
  }

  addTask() {
    let newTask: DemandasOutputDTO = {
      descricao: 'Nova Demanda',
      status: 'Pendente',
      usernameDono: this.consultor.username,
    };
    console.log(this.consultor.username);
    this.demandaService.addDemanda(newTask).subscribe({
      next: (data) => {
        console.log('Demanda adicionada:', data);
        // Recarrega a lista de demandas após adicionar
      },
      error: (error) => console.error('Erro ao adicionar demanda:', error),
    });
  }
}
