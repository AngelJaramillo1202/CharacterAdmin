import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/servicios/crud.service';
import { UsuarioServiceService } from 'src/app/servicios/usuario-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: string = '';
  password: string = '';

  FormularioLogin:FormGroup;

  constructor(
    private router: Router,
    private crudService: CrudService,
    private UsuarioService: UsuarioServiceService,
    public Formulario:FormBuilder,
  ) {
     this.FormularioLogin = this.Formulario.group({
      Correo: [''],
      Pass: ['']
    });
   }

  ngOnInit(): void {
  }
  validar():any{
     this.crudService.ValidarUsuario(this.FormularioLogin.value).subscribe(respuesta=>{
      if (respuesta){
        this.UsuarioService.Sesion(1);
        this.router.navigate(['Home']);
        console.log('redireccionando...');
      }else{
        alert('Por favor ingresa un usuario o contraseña válidos');
      }
    })
  }
}
