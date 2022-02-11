import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
 
  activo(a:number){
    let home = $('.home'),
    secciones = $('.secciones'),
    personajes = $('.personajes'),
    buscar = $('.buscar');

    home.removeClass('activo');
    if (a == 1){
      home.addClass('activo');
      secciones.removeClass('activo');
      personajes.removeClass('activo');
      buscar.removeClass('activo');
    } else if (a == 2){
      home.removeClass('activo');
      secciones.addClass('activo');
      personajes.removeClass('activo');
      buscar.removeClass('activo');
    }else if (a ==3){
      personajes.addClass('activo');
      secciones.removeClass('activo');
      home.removeClass('activo');
      buscar.removeClass('activo');
    } else {
      buscar.addClass('activo');
      secciones.removeClass('activo');
      personajes.removeClass('activo');
      home.removeClass('activo');
    }

  }

}
