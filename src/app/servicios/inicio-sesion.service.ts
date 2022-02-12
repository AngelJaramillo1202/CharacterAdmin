import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InicioSesionService {


  constructor() { }

  sesion(a:number){
    var page = "";
    if (a==1){
    page = '<app-main></app-main>';
    }else{
     page = "<app-login></app-login>"
    }
    return page;
  }

}
