import { Component, Input } from '@angular/core';
import { Consultor } from '../../models/ConsultorModel';

@Component({
  selector: 'app-consultor-box',
  imports: [],
  templateUrl: './consultor-box.html',
  styleUrl: './consultor-box.scss',
})
export class ConsultorBox {
  @Input() consultor!: Consultor;
}
