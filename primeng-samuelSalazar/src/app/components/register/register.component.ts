import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailValidator, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CardModule, InputTextModule, ReactiveFormsModule,PasswordModule,ButtonModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor( private fb: FormBuilder){
    this.registerForm = this.fb.group({
      fullName:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]],
      conPassword:['',[Validators.required,Validators.minLength(8)]]
    })
  }
  onSubmit(){
    if (this.registerForm.valid)
    {
      const {fullName, Email, password, conPassword} = this.registerForm.value
      if (password == conPassword){
        console.log(this.registerForm.value)
      }else{
        console.log('Las contraseñas no coinciden!')
      }
      
    }else{
      console.log('Formulario Invalido')
    }
  }
}
