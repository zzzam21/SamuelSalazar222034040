import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// Un solo archivo para procesos relacionados
export class LoginService {

  //Url del API almacenada de forma privada
  // Punto de acceso (npoint)
  appiUrl="https://localhost:7078/api/Users";

  // Privada porque el ambito de este servicio solo va a servir para este
  // Esta es utilizada para poder utilizar los metodos. Como put, get, etc
  constructor(private http:HttpClient) {}

  // Observable es un objeto que representa un flujo de datos que se pueden manejar 
  // de forma asíncrona. Los Observables son parte de la biblioteca RxJS (Reactive Extensions for JavaScript) 
  // y se utilizan principalmente para manejar eventos o flujos de datos que pueden ocurrir en el futuro, 
  // como respuestas de peticiones HTTP, eventos del usuario - se controla con HttpClientModule

  login(username: string, password: string):Observable<any>{ //Observable es un arreglo que va a recibir los datos (username y password)
    const body = {username,password};

    return this.http.post(`${this.appiUrl}/login`,{username, password});
    //http es una variable de tipo HttpClient,
    //post es un metodo, que espera como atributos la url base y los argumentos en este caso usuario y contraseña
    //Aqui estamos definiendo el servicio, pero hay que comunicarlo con el formulario
  }
  
  register(username: string, password:string):Observable<any>{
    const body = {username, password};
    return this.http.post(`${this.appiUrl}/register`,{username,password});
  }
  //Los servicios donde solo existe un metodo se llama microservicios.
  update(Id: string, username:string ,password:string):Observable<any>{
    const body = {username, password};
    return this.http.put(`${this.appiUrl}/update/${Id}`,body);
  }
  // Put es como update, se utiliza para operaciones que necesitan un alto performance (Mayor velocidad)
  // Si es put en front-end va a ser update en el backend
  
  delete(Id: string):Observable<any>{
    return this.http.delete(`${this.appiUrl}/delete/${Id}`);
  }
  
  //Obtener todos los usuarios desde el backend
  // Va a retornar varios valores
  getUsers():Observable<any[]>{
    return this.http.get<any[]>(`${this.appiUrl}/getusers`);
  }

  getUsersById(id: String):Observable<any>{
    return this.http.get<any>(`${this.appiUrl}/getUsersById/${id}`);
  }
}


