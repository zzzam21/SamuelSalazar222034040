import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor( private http: HttpClient) {}

  appiUrl = "https://localhost:7255/api/books"

  listBooks():Observable<any[]> {
    return this.http.get<any[]>(`${this.appiUrl}/listBooks`)
  }

  idBooks():Observable<any[]> {
    return this.http.get<any[]>(`${this.appiUrl}/idBooks`)
  }
}
