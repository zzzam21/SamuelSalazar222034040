import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [InputTextModule, CommonModule, ReactiveFormsModule,ButtonModule, FormsModule],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {
  booksForm: FormGroup;

  constructor( private fb: FormBuilder){
    
    this.booksForm = this.fb.group(
      {
        Id: ['',Validators.required], 
        tittle: ['',Validators.required], 
        author: ['',Validators.required],
        editorial: ['',Validators.required],
        pages: ['',Validators.required]
      }
    );
  }

// Conectar con el servicio
  onSubmit() {
    if (this.booksForm.valid) 
    {
      console.log(this.booksForm.value,'Procedimiento Correcto!')
    }else
    {
      console.log('Formulario invalido!')
    }
  }
}
