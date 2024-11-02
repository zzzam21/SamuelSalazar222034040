import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //Url del API almacenada de forma privada
  appiUrl="http://localhost:7078/api/users";

  // Observable es un objeto que representa un flujo de datos que se pueden manejar 
  // de forma asíncrona. Los Observables son parte de la biblioteca RxJS (Reactive Extensions for JavaScript) 
  // y se utilizan principalmente para manejar eventos o flujos de datos que pueden ocurrir en el futuro, 
  // como respuestas de peticiones HTTP, eventos del usuario - se controla con HttpClientModule

  constructor(private http:HttpClient) {}


  login(username: string, password: string):Observable<any>{ //Observable es un arreglo que va a recibir los datos (username y password)
    const body = {username,password};
    return this.http.post(`${this.appiUrl}/login`,{username, password});
    //http es una clase
    //post es un metodo, que espera como atributos la url base y los argumentos en este caso usuario y contraseña
    //Aqui estamos definiendo el servicio, pero hay que comunicarlo con el formulario
  }
  
  register(username: string, password:string):Observable<any>{
    const body = {username, password}
    return this.http.post(`${this.appiUrl}/register`,{username,password});
  }
  //Los servicios donde solo existe un metodo se llama microservicios.
}


