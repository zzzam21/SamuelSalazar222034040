import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TreeSelectModule } from 'primeng/treeselect';
import { BookService } from '../../services/book.service';


@Component({
  selector: 'app-update-book',
  standalone: true,
  imports: [TreeSelectModule,FormsModule],
  templateUrl: './update-book.component.html',
  styleUrl: './update-book.component.css'
})
export class UpdateBookComponent {
  // Ids: any[];

  constructor(private bookService: BookService){

  }
}
