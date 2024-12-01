import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { LoginService } from '../../services/login.service';
import { MessageModule } from 'primeng/message';
import { catchError,of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-delete-user',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, InputTextModule,MessageModule,CommonModule,ButtonModule],
  templateUrl: './delete-user.component.html',
  styleUrl: './delete-user.component.css'
})
export class DeleteUserComponent {
  deleteForm: FormGroup;

  successMessage: string = '';
  errorMessage:string = '';

  constructor(private fb: FormBuilder, private deleteService: LoginService){
    this.deleteForm = this.fb.group(
      {
        Id: ['', Validators.required]
      }
    )
  }
  onDelete():void {
    if (this.deleteForm.valid){
      const Id = this.deleteForm.value.Id;
      this.deleteService.delete(Id).pipe
      (
        catchError((err) => {
          if (err.status==200){
            return of(null);
          }
          throw err
        })
      ).subscribe(
        {
          next: () => {
            this.successMessage = 'Usuario eliminado correctamente!';
            this.errorMessage = '';
            this.deleteForm.reset();
          },
          error: () => {
            this.errorMessage = 'Error al eliminar usuario!';
            this.successMessage = '';
          }
        }
      );
    }
  }
}
