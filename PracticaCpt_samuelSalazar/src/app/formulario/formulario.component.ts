import { Component } from '@angular/core';
import { FirstCComponent } from '../components/first-c/first-c.component';
import { SecondCComponent } from '../components/second-c/second-c.component';
import { ThirdCComponent } from '../components/third-c/third-c.component';
import { ReactiveFormsModule,Form, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FirstCComponent,SecondCComponent,ThirdCComponent,ReactiveFormsModule,ButtonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  otherForm: FormGroup;

  constructor(private fb: FormBuilder){
    this.otherForm = this.fb.group(
      {
        firstName: ['',Validators.required],
        lastName: ['',Validators.required],
        textEdit : ['',Validators.required],
        beginDate : ['',Validators.required],
        endDate : ['',Validators.required],
        directName: ['',Validators.required],
        directEmail: ['',[Validators.required, Validators.email]],
        email: ['',[Validators.required,Validators.email]],
        phone: ['',[Validators.required,Validators.pattern('^[0-9]*$')]]
      }
    )
  };

  onSubmit(){
    if (this.otherForm.valid){
      console.log(this.otherForm.value);
    }else{
      console.log('Formulario no valido');
    }
  }
}
