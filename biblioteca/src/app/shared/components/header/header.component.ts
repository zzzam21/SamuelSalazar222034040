import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ImageModule } from 'primeng/image';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenubarModule, ImageModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
items: MenuItem[] | undefined;

  ngOnInit(): void {
      this.items = [
        {
          label: 'Inicio',
          icon: 'pi pi-home',
          route: '/home'
        },
        {
          label: 'Agregar bibro',
          icon: 'pi pi-plus',
          route: '/addbook'
        },
        {
          label: 'Buscar libro',
          icon: 'pi pi-search',
          route: '/searchBook'
        },
        {
          label: 'Editar libro',
          icon: 'pi pi-pencil',
          route: '/updatebook'
        },
        {
          label: 'Eliminar libro',
          icon: 'pi pi-trash',
          route: '/deletebook'
        }
      ]
  }
}
