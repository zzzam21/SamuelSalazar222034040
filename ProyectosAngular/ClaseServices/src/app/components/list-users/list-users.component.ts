import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { LoginService } from '../../services/login.service';


@Component({
  selector: 'app-list-users',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule, HttpClientModule ],
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.css'
})
export class ListUsersComponent {
  users: any[] = [];
  errorMessage: string = '';

  constructor(private loginservice: LoginService){
    this.loadUsers();
  }

  loadUsers():void{
    this.loginservice.getUsers().subscribe({
      next: (users) => {
        this.users = users;
      },
      error:() => {
        this.errorMessage = 'Error al cargar los usuarios!';
      }
    });
  }
}
