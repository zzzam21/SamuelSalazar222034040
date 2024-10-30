import { Component } from '@angular/core';
import { FirstCComponent } from '../components/first-c/first-c.component';
import { SecondCComponent } from '../components/second-c/second-c.component';
import { ThirdCComponent } from '../components/third-c/third-c.component';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FirstCComponent,SecondCComponent,ThirdCComponent],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

}
