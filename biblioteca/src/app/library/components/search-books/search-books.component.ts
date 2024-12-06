import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-search-books',
  standalone: true,
  imports: [TableModule,CommonModule],
  templateUrl: './search-books.component.html',
  styleUrl: './search-books.component.css'
})
export class SearchBooksComponent{

  books: any[] = [];
  errorMessage: string = '';
  constructor(private bookService: BookService){
    this.loadBooks()
  }

  loadBooks(): void{
    this.bookService.listBooks().subscribe({
      next: (books) => {this.books = books;},
      error: () => {this.errorMessage = 'Error al listar libros!'}
    })
  }
  // crear constructor y el servicio
}