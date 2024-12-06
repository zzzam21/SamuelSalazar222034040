import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() {}

  url = "https://localhost:7255/api"

  listBooks () {
    return this.url
  }

  idBooks () {
    
  }
}
