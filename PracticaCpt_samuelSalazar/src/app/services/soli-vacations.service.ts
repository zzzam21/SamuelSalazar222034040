import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SoliVacationsService {

  appiUrl="https://localhost:7163/api/Solicitud"

  constructor(private http:HttpClient) { }

  register(name: string ,lastName: string ,emailUser: string ,numberphone: string ,managerName: string ,managerEmail: string ,license: string ,startDate: string ,endDate: string ):Observable<any>
  {
    return this.http.post(`${this.appiUrl}/registrar`, {name,lastName,emailUser,numberphone,managerName,managerEmail,license,startDate,endDate});
  }
}
