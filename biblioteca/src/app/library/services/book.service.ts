import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor( private http: HttpClient) {}

  appiUrl = "https://localhost:7255/api/books"

  addBook(Id:string ,tittle:string ,author:string ,editorial:string ,pages:string ):Observable<any>{
    const Body = {Id, tittle, author, editorial, pages};
    return this.http.post(`${this.appiUrl}/addBook/${Id}`,Body);
  }

  listBooks():Observable<any[]> {
    return this.http.get<any[]>(`${this.appiUrl}/listBooks`)
  }

  idBooks():Observable<any[]> {
    return this.http.get<any[]>(`${this.appiUrl}/idBooks`)
  }
}
