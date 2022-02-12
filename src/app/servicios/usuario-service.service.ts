import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  inicio:boolean = false;
  pagina:string = "<app-login></app-login>";
  constructor() { }

  Sesion(a:number){
    if(a ==1){
      this.inicio = true;
    }else{
      this.inicio = false;
    }
  }
  revisarInicio(){
    if (this.inicio == true){
      this.pagina = "<app-main></app-main>";
      console.log(this.pagina);
    }
    return this.pagina;
  }
}
