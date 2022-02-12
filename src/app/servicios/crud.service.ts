import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ObjSec, InicioData } from './DataModels';
import{Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
API:string = 'http://localhost/CRUD/index.php/';
  constructor(
    private cienteHttp:HttpClient
  ) {   }

  CrearSeccion(datosSec:Object):Observable<any> {

      return this.cienteHttp.post(this.API+"?crearSecc=1", datosSec);
  }
  ObtenerSecciones():Observable<any>{
    return this.cienteHttp.get(this.API);
  }
  ValidarUsuario(datos:InicioData):Observable<any>{
    return this.cienteHttp.post(this.API+"?validUser=1",datos);
  }
}
