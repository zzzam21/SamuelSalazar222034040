import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MytestcomponentComponent } from "./mytestcomponent/mytestcomponent.component";
/* */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MytestcomponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clase';
}
