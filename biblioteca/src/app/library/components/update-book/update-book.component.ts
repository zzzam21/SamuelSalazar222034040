import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TreeSelectModule } from 'primeng/treeselect';
import { BookService } from '../../services/book.service';
import { DropdownModule } from 'primeng/dropdown';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-update-book',
  standalone: true,
  imports: [FormsModule,DropdownModule,ReactiveFormsModule,CommonModule,InputTextModule,ButtonModule],
  templateUrl: './update-book.component.html',
  styleUrl: './update-book.component.css'
})

export class UpdateBookComponent {
  // Variable para controlar el formulario
  updateForm: FormGroup;
  //Variables para cargar los id's de los libros
  Ids: any[] = [];
  // Variable para mostrar mensaje de error
  errorMessage:string = '';

  constructor(private fb: FormBuilder,private bookService: BookService){
    this.loadIds();

    this.updateForm = this.fb.group(
      {
        Id: ['',Validators.required],
        tittle: ['',Validators.required],
        author: ['',Validators.required],
        editorial: ['',Validators.required],
        pages: ['',Validators.required],
      }
    )
  }

  // Metodo que trae los ids de la base de datos
  loadIds():void {
    this.bookService.idBooks().subscribe({
      next: (Ids) => { this.Ids = Ids;},
      error: () => {this.errorMessage = "Error al cargar los id's"}
    })
  }

  onSubmit():void{
    
  }

}
