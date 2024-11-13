import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-myregister',
  standalone: true,
  imports: [InputTextModule, ButtonModule, FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './myregister.component.html',
  styleUrl: './myregister.component.css'
})
export class MyregisterComponent {
  regForm: FormGroup;

  constructor( private fb: FormBuilder, private registerService: LoginService){

    this.regForm = this.fb.group({
      username : ['', [Validators.required,Validators.email]],
      password : ['', [Validators.required,Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.regForm.valid) {
      const {username, password} = this.regForm.value;
      this.registerService.register(username, password).subscribe(response => {console.log('Existoso!',response)});
      console.log(this.regForm.value);
    }
    else
    {
      console.log('Formulario invalido!');
    }
  }
}
