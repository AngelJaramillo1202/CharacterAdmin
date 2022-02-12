import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import * as $ from 'jquery';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {

  FormularioSecciones:FormGroup;

  constructor(public Formulario:FormBuilder) { 
    this.FormularioSecciones = this.Formulario.group({
      Nombre: [''],
      Descripcion: [''],
      Relacion: [''],
      Etiquetas: ['']
    });
  }

  ngOnInit(): void {
  }
  enviarDatos():any{
    console.log('enviando')
    console.log(this.FormularioSecciones.value);
  }

  mostrar(a:number){
    let form = $('#form');
    
    if(a == 1){
    form.removeClass('hidden');
    } else{
     form.addClass('hidden'); 
    }
  }
}
