import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-second-c',
  standalone: true,
  imports: [InputGroupModule,ReactiveFormsModule,InputGroupAddonModule,InputTextModule,CommonModule,FormsModule],
  templateUrl: './second-c.component.html',
  styleUrl: './second-c.component.css'
})
export class SecondCComponent {
  otherForm: FormGroup;

  constructor(private fb: FormBuilder){
    this.otherForm = this.fb.group(
      {
        directName: ['',Validators.required],
        directEmail: ['',[Validators.required, Validators.email]]
      }
    )
  };
  onSubmit (){
    if (this.otherForm.valid){
      console.log(this.otherForm.value);
    }else{
      console.log('Formulario no valido!');
    }
  }
}
