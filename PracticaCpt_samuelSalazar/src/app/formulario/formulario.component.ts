import { Component } from '@angular/core';
import { FirstCComponent } from '../components/first-c/first-c.component';
import { SecondCComponent } from '../components/second-c/second-c.component';
import { ThirdCComponent } from '../components/third-c/third-c.component';
import { ReactiveFormsModule,Form, FormGroup, FormBuilder } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FirstCComponent,SecondCComponent,ThirdCComponent,ReactiveFormsModule,ButtonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

}
