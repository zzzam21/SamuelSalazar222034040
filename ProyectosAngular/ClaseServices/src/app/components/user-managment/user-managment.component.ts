import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Password, PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule, HttpResponse } from '@angular/common/http';
import { MessageModule } from 'primeng/message';
import { of,catchError } from 'rxjs';


@Component({
  selector: 'app-user-managment',
  standalone: true,
  imports: [ 
    ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    CommonModule,
    ButtonModule,
    HttpClientModule,
    MessageModule],
  templateUrl: './user-managment.component.html',
  styleUrl: './user-managment.component.css'
})
export class UserManagmentComponent {
  updateForm: FormGroup; // Procesa el formulario de actualización, este captura los datos
  
  successMessage: string = ''; // Van a ser variables usadas en el front-end
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private loginService: LoginService){

    this.updateForm = this.fb.group
    ({
      userId: ['', Validators.required],
      username: ['', [Validators.required,Validators.minLength(3),Validators.email]],
      password: ['',[Validators.required,Validators.minLength(6)]]
    });

  }
  onUpdate(): void {
    if (this.updateForm.valid) {
      const {userId, username, password} = this.updateForm.value;
      this.loginService.update(userId, username, password).pipe(
        catchError((err) => {
          if(err.status ==200){
            return of(null);
          }
          throw err;
        }
        )
      ).subscribe //Inicializar el recorrido
      ({
        next: () => { // Se podría actualizar con if anidados!
          this.successMessage = 'Usuario actualizado exitosamente!';
          this.errorMessage = '';
          this.updateForm.reset();
        },
        error: () => {
          this.errorMessage = 'Error al actualizar datos!' // El siempre esta retornando para todos los casos
          this.successMessage = '';
        }
      })
    }
  }
}
