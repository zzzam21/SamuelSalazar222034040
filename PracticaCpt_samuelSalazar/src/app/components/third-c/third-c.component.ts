import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { EditorModule } from 'primeng/editor';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';

@Component({
  selector: 'app-third-c',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,EditorModule,InputGroupModule, InputGroupAddonModule,CalendarModule],
  templateUrl: './third-c.component.html',
  styleUrl: './third-c.component.css'
})
export class ThirdCComponent {
  @Input() otherForm!: FormGroup;

  // constructor(private fb: FormBuilder){
  //   this.otherForm = this.fb.group(
  //     {
  //       textEdit : ['',Validators.required],
  //       beginDate : ['',Validators.required],
  //       endDate : ['',Validators.required]
  //     }
  //   )
  // };
  
  // onSubmit(){
  //   if (this.otherForm.valid){
  //     console.log(this.otherForm.value);
  //   }else{
  //     console.log('Formulario no valido');
  //   }
  // }
}
