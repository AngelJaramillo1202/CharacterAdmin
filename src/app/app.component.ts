import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { UsuarioServiceService } from './servicios/usuario-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CharacterAdmin';
  pagina:any = "<app-login></app-login>";

  constructor(
    private router: Router,
    private UsuarioService:UsuarioServiceService
  ){}
  ngOnInit(): void {
   this.pagina =  this.UsuarioService.revisarInicio;
  }


}
