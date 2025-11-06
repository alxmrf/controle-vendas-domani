import { Routes } from '@angular/router';
import { Consultores } from './pages/consultores/consultores';

export const routes: Routes = [

    {path:"consultores", component:Consultores},
    { path: '', redirectTo: '/consultores', pathMatch: 'full' },

];
