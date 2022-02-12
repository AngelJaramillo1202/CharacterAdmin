import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { CrudService } from 'src/app/servicios/crud.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {

  FormularioSecciones:FormGroup;
  Secciones:any;
  constructor(
    public Formulario:FormBuilder,
    private crudService:CrudService
    ) { 
    this.FormularioSecciones = this.Formulario.group({
      Nombre: [''],
      Descripcion: [''],
      Relacion: [''],
      Etiquetas: ['']
    });
  }

  ngOnInit(): void {
    this.crudService.ObtenerSecciones().subscribe(respuesta=>{
      console.log(respuesta);
      this.Secciones = respuesta;
    })
  }
  enviarDatos():any{
    this.crudService.CrearSeccion(this.FormularioSecciones.value).subscribe();
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
