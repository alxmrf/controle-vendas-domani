import { Component, Input } from '@angular/core';
import { Consultor } from '../../models/ConsultorModel';
import { CommonModule, NgStyle } from '@angular/common';

@Component({
  selector: 'app-consultor-box',
  standalone: true,
  imports: [CommonModule,NgStyle],
  templateUrl: './consultor-box.html',
  styleUrl: './consultor-box.scss',
})
export class ConsultorBox {
  @Input() consultor!: Consultor;
  isExpanded: boolean = false;
  ngOnInit() {
  }

  expandedSize = {
    "width": "500px",
    "height":'500px',
  };

  setExpanded() {
    this.isExpanded = !this.isExpanded;
    console.log(this.isExpanded);
  }
}
