import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from '../app/components/home/home.component';
import {SectionsComponent} from '../app/components/sections/sections.component';
import {PersonajesComponent} from '../app/components/personajes/personajes.component';
import {BuscarComponent} from '../app/components/buscar/buscar.component';

const routes: Routes = [
  {path: 'Home', component: HomeComponent },
  {path: 'Sections', component: SectionsComponent },
  {path: 'Personajes', component: PersonajesComponent },
  {path: 'Buscar/:termino', component: BuscarComponent },
  {path: 'Buscar', component:BuscarComponent},
    {path: '**', pathMatch: 'full', redirectTo: '/Home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const APP_ROUTING = RouterModule.forRoot(routes);