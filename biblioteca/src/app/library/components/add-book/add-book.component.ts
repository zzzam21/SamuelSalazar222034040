import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [InputTextModule, CommonModule, ReactiveFormsModule,ButtonModule, FormsModule],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {
  booksForm: FormGroup;

  constructor( private fb: FormBuilder, private bookService: BookService){
    
    this.booksForm = this.fb.group(
      {
        Id: ['',[Validators.required,Validators.minLength(9),Validators.maxLength(9)]], 
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
      const {Id,tittle,author,editorial,pages} = this.booksForm.value;
      this.bookService.addBook(Id,tittle,author,editorial,pages).subscribe
      (
        response => {console.log('Exitoso!',response)}
      )
      
    }else
    {
      console.log('Formulario invalido!')
    }
  }
}
