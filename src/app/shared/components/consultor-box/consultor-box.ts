import { Component, Input } from '@angular/core';
import { Consultor } from '../../models/ConsultorModel';
import { CommonModule, NgStyle } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { DemandasOutputDTO } from '../../models/DemandasModel';
import { DemandaService } from '../../services/demanda-service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAdicionarDemanda } from '../../../pages/consultores/modal-adicionar-demanda/modal-adicionar-demanda';
import { ModalCancelar } from '../../../pages/consultores/modal-cancelar/modal-cancelar';
import { Router } from '@angular/router';

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

  constructor(
    private demandaService: DemandaService,
    private modalService: NgbModal,
    private router: Router
  ) {}

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
    let modalRef = this.modalService.open(ModalAdicionarDemanda, { size: 'lg' });

    modalRef.result.then((result) => {
      let newTask: DemandasOutputDTO = {
        descricao: result.descricao,
        status: result.status,
        usernameDono: this.consultor.username,
      };
      this.demandaService.addDemanda(newTask).subscribe({
        next: (data) => {
          this.reloadComponent();
          // Recarrega a lista de demandas após adicionar
        },
        error: (error) => console.error('Erro ao adicionar demanda:', error),
      });
    });
  }
  acaoDeletar(element: any) {
    console.log(element);
  }

  acaoDeletarDemanda(element: any) {
    let taskToDelete: DemandasOutputDTO = {
      descricao: element.descricao,
      status: element.status,
      usernameDono: this.consultor.username,
    };
    let modalRef = this.modalService.open(ModalCancelar, { size: 'lg' });

    modalRef.result.then(() => {
      this.demandaService.deleteDemanda(taskToDelete).subscribe(() => {
        this.reloadComponent();
      });
      this.reloadComponent();
    });
  }
  reloadComponent() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }
}
