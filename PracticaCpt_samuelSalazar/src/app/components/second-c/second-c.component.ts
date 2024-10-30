import { Component } from '@angular/core';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-second-c',
  standalone: true,
  imports: [InputGroupModule,InputGroupAddonModule,InputTextModule],
  templateUrl: './second-c.component.html',
  styleUrl: './second-c.component.css'
})
export class SecondCComponent {

}
