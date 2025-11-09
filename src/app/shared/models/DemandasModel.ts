import { Consultor } from './ConsultorModel';

export interface Demandas {
  descricao: string;

  dataCriacao: string;

  status: string;

  dono: Consultor;
}
