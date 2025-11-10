import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { backend_url } from '../resources/enviroment';
import { Consultor, ConsultorOutputDTO } from '../models/ConsultorModel';
import { DemandasOutputDTO } from '../models/DemandasModel';
@Injectable({
  providedIn: 'root',
})
export class DemandaService {
  constructor(private httpClient: HttpClient) {}

  getAll() {
    throw new Error('Method not implemented.');
  }

  addDemanda(demanda: DemandasOutputDTO) {
    return this.httpClient.post<Consultor>(`${backend_url}/demanda/nova-demanda`, demanda);
  }
}
