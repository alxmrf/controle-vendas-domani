import { Demandas } from './DemandasModel';
import { Lead } from './LeadModel';

export interface Consultor {
  nome: string;
  cargo: string;
  area: string;
  username: string;
  demandas: Demandas[];
  leads:Lead[]
}
