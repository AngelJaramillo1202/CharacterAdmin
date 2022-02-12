import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from '../app/components/home/home.component';
import {SectionsComponent} from '../app/components/sections/sections.component';
import {PersonajesComponent} from '../app/components/personajes/personajes.component';
import {BuscarComponent} from '../app/components/buscar/buscar.component';
import {MainComponent} from '../app/components/main/main.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: 'Home', component: HomeComponent },
  {path: 'Sections', component: SectionsComponent },
  {path: 'Personajes', component: PersonajesComponent },
  {path: 'Buscar/:termino', component: BuscarComponent },
  {path: 'Buscar', component:BuscarComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'Main', component: MainComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'Login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const APP_ROUTING = RouterModule.forRoot(routes);