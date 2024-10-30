import { Component } from '@angular/core';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-first-c',
  standalone: true,
  imports: [InputGroupAddonModule,InputGroupModule,InputTextModule ],
  templateUrl: './first-c.component.html',
  styleUrl: './first-c.component.css'
})
export class FirstCComponent {

}
