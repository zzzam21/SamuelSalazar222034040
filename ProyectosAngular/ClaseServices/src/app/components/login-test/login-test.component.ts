import { CommonModule } from '@angular/common';
import {  HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { LoginService } from '../../services/login.service';



@Component({
  selector: 'app-login-test',
  standalone: true,
  imports: [ReactiveFormsModule, InputTextModule, ButtonModule, PasswordModule, CommonModule, HttpClientModule], //Modulos requeridos para el trabajo con formularios
  templateUrl: './login-test.component.html',
  styleUrl: './login-test.component.css'
})
export class LoginTestComponent {
  userForm: FormGroup;

  //loginService para poder llamar al metodo login
  constructor(private fb: FormBuilder, private loginService: LoginService) {
    
    this.userForm = this.fb.group({

      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],

    });
  }

  //iteraccion con el servicio login.service
  // Aquí ocurre una Serialización, consiste en convertir un objeto en una
  // secuencia de bytes para poder almacenarlo o transmitirlo
  onSubmit() {
    if (this.userForm.valid) {
      const {email,password} = this.userForm.value;
      //Por haber definido la variable loginService de tipo LoginService, va a utilizar de esa variable
      //el metodo login
      this.loginService.login(email,password).subscribe(response => {console.log("Exitoso",response)});
      //subscribe envia por el protocolo y me reenvie codigo de error http como 404, 401 
      console.log(this.userForm.value);
    } else {
      console.log('Formulario invalido');
    }
  }
  //Un servicio puede tener varios metodos
}
