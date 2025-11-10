import { Component, Input } from '@angular/core';
import { Consultor } from '../../models/ConsultorModel';
import { CommonModule, NgStyle } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

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
}
