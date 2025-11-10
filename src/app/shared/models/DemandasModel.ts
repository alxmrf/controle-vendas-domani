import { Consultor } from './ConsultorModel';

export interface Demandas {
  descricao: string;

  dataCriacao: string;

  status: string;

  dono: Consultor;
}

export interface DemandasOutputDTO {
  descricao: string;
  status: string;
  usernameDono: string;
}
