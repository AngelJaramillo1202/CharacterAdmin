import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

import * as $ from 'jquery';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  @ViewChild('mat-sidenav')
  sidenav!: MatSidenav;
  @ViewChild('btnHam')
  events: string[] = [];
  opened: boolean = false;
  isClosed: boolean = true;


constructor() {}

  close() {
    
    var trigger = $('.hamburger');
    trigger.removeClass('is-open');
    trigger.addClass('is-closed');
        trigger.addClass('closingAnimation');
    this.isClosed = true;
    this.sidenav.close();

  }
  hamburger_cross(){
    var trigger = $('.hamburger');
    if (this.isClosed == true) {
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        trigger.removeClass('closingAnimation');
        this.isClosed = false;
        
      } else {   
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        trigger.addClass('closingAnimation');
        this.isClosed = true;

      }

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

ngOnInit(): void {}

}

