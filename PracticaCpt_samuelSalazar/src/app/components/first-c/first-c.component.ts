import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-first-c',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,InputGroupAddonModule,InputGroupModule,InputTextModule ],
  templateUrl: './first-c.component.html',
  styleUrl: './first-c.component.css'
})
export class FirstCComponent {
  @Input() otherForm!: FormGroup; 
  // otherForm: FormGroup;

  // constructor(private fb:FormBuilder){
  //   this.otherForm = this.fb.group(
  //     {
  //       firstName: ['',Validators.required],
  //       lastName: ['',Validators.required],
  //       email: ['',[Validators.required,Validators.email]],
  //       phone: ['',[Validators.required,Validators.pattern('^[0-9]*$')]]
  //     }
  //   )
  // };

  // onSubmit() {
  //   if (this.otherForm.valid){
  //     console.log(this.otherForm.value);
  //   }else{
  //     console.log('Formulario no valido!');
  //   }
  // }
}
