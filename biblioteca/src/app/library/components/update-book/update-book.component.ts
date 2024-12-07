import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TreeSelectModule } from 'primeng/treeselect';
import { BookService } from '../../services/book.service';
import { DropdownModule } from 'primeng/dropdown';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { catchError,of } from 'rxjs';
import { MessageModule } from 'primeng/message';


@Component({
  selector: 'app-update-book',
  standalone: true,
  imports: [FormsModule,DropdownModule,ReactiveFormsModule,CommonModule,InputTextModule,ButtonModule,MessageModule],
  templateUrl: './update-book.component.html',
  styleUrl: './update-book.component.css'
})

export class UpdateBookComponent {
  // Variable para controlar el formulario
  updateForm: FormGroup;
  //Variables para cargar los id's de los libros
  Ids: any[] = [];
  // Variable para mostrar mensaje de error
  successMessage: string = '';
  errMessage:string = '';

  constructor(private fb: FormBuilder,private bookService: BookService){
    this.loadIds();

    this.updateForm = this.fb.group(
      {
        Id: ['',Validators.required],
        tittle: ['',[Validators.required,Validators.minLength(3)]],
        author: ['',[Validators.required,Validators.minLength(3)]],
        editorial: ['',[Validators.required,Validators.minLength(3)]],
        pages: ['',[Validators.required,Validators.minLength(1)]],
      }
    )
  }

  // Metodo que trae los ids de la base de datos
  loadIds():void {
    this.bookService.idBooks().subscribe({
      next: (Ids) => { this.Ids = Ids;},
      error: () => {this.errMessage = "Error al cargar los id's"}
    })
  }

  onSubmit():void{
    if (this.updateForm.valid)
    {
      const {Id,tittle,author,editorial,pages} = this.updateForm.value;
      
      this.bookService.updateBook(Id,tittle,author,editorial,pages).pipe(
        catchError((err) => 
          {
            if (err.status == 200){
              return of(null)
            }
            throw(err)
          }
        )
      ).subscribe
      ({
        next: () => {
          this.successMessage = "Libro actualizado correctamente!";
          this.errMessage = '';
          this.updateForm.reset()
        },
        error: () => {
          this.errMessage = "Error al actualizar información del libro!";
          this.successMessage = '';
        }
      })
    }
  }

}
