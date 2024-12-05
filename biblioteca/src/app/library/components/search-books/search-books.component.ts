import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-search-books',
  standalone: true,
  imports: [TableModule,CommonModule],
  templateUrl: './search-books.component.html',
  styleUrl: './search-books.component.css'
})
export class SearchBooksComponent{

  books: any[] = [];

  // crear constructor y el servicio
}
