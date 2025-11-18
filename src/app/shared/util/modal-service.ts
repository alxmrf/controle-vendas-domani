import { Injectable } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(private modalService: NgbModal) {}

  openModal(component: any) {
    const modalOptions: NgbModalOptions = {
      // Your original options
      backdrop: 'static', // Changed to 'static' to "stand out"
      keyboard: true,
      size: 'lg',

      // The new styling options
      centered: true,
      windowClass: 'my-modal-standout',
      backdropClass: 'my-modal-backdrop',
    };
    return this.modalService.open(component, modalOptions);
  }
}
