import { Component } from '@angular/core';
import { FirstCComponent } from '../components/first-c/first-c.component';
import { SecondCComponent } from '../components/second-c/second-c.component';
import { ThirdCComponent } from '../components/third-c/third-c.component';
import { ReactiveFormsModule,Form, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { SoliVacationsService } from '../services/soli-vacations.service';


@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FirstCComponent,SecondCComponent,ThirdCComponent,ReactiveFormsModule,ButtonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  otherForm: FormGroup;

  constructor(private fb: FormBuilder, private registerService : SoliVacationsService){
    this.otherForm = this.fb.group(
      {
        firstName: ['',Validators.required],
        lastName: ['',Validators.required],
        email: ['',[Validators.required,Validators.email]],
        phone: ['',[Validators.required,Validators.pattern('^[0-9]*$'),Validators.maxLength(10)]],
        directName: ['',Validators.required],
        directEmail: ['',[Validators.required, Validators.email]],
        textEdit : ['',Validators.required],
        beginDate : ['',Validators.required],
        endDate : ['',Validators.required] 
      }
    );
  }

  onSubmit(){
    if (this.otherForm.valid){
      console.log(this.otherForm.value);
      const {firstName,lastName,email,phone,directName,directEmail,textEdit,beginDate,endDate} = this.otherForm.value;
      this.registerService.register(firstName,lastName,email,phone,directName,directEmail,textEdit,beginDate,endDate).subscribe(
        {
          next: (response) => {
            {console.log('Exitoso',response)};
        },
         complete:() => {
          console.log("Envio de información completo!")
         }
        });

    }else{
      console.log('Formulario no valido');
    }
  };
}
