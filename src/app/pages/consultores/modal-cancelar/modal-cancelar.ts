import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-cancelar',
  imports: [],
  templateUrl: './modal-cancelar.html',
  styleUrl: './modal-cancelar.scss',
})
export class ModalCancelar {

  constructor(private activeModal:NgbActiveModal){}

  acaoConfirmar(){
    this.activeModal.close()
  }
  acaoDismiss(){
    this.activeModal.dismiss()
  }
}
