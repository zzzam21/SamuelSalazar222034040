import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-formularioplantilla1',
  standalone: true,
  imports: [InputTextModule, FormsModule, PasswordModule],
  templateUrl: './formularioplantilla1.component.html',
  styleUrl: './formularioplantilla1.component.css'
})
export class Formularioplantilla1Component {
  value: string = '';
  password: string = '';

}
