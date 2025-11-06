import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { backend_url } from '../resources/enviroment';
import { Consultor } from '../models/ConsultorModel';
@Injectable({
  providedIn: 'root'
})
export class ConsultorService {



  constructor(private httpClient: HttpClient) { }
  
  getAll(){
    return this.httpClient.get<Consultor[]>(`${backend_url}/consultor`)
  }

}
