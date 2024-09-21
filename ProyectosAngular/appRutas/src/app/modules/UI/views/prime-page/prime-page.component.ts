import { Component, OnInit} from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';


// @... se llaman selectores
@Component({
  selector: 'app-prime-page',
  standalone: true,
  imports: [ButtonModule,MenubarModule],
  templateUrl: './prime-page.component.html',
  styleUrl: './prime-page.component.css'
})
// Todo lo que vaya en export es lo que va a interactuar con la interfaz grafica
// Se esta heredando OnInit
export class PrimePageComponent implements OnInit{
  items: MenuItem[] | undefined;

  ngOnInit() 
  {
    this.items = [
        {
            label: 'Home',
            icon: 'pi pi-home'
        },
        {
            label: 'Features',
            icon: 'pi pi-star'
        },
        {
            label: 'Projects',
            icon: 'pi pi-search',
            items: [
                {
                    label: 'Components',
                    icon: 'pi pi-bolt'
                },
                {
                    label: 'Blocks',
                    icon: 'pi pi-server'
                },
                {
                    label: 'UI Kit',
                    icon: 'pi pi-pencil'
                },
                {
                    label: 'Templates',
                    icon: 'pi pi-palette',
                    items: [
                        {
                            label: 'Apollo',
                            icon: 'pi pi-palette'
                        },
                        {
                            label: 'Ultima',
                            icon: 'pi pi-palette'
                        }
                    ]
                }
            ]
        },
        {
            label: 'Contact',
            icon: 'pi pi-envelope'
        }
    ]
  }
}
