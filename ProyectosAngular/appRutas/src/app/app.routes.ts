import { Routes } from '@angular/router';
import { HomePageComponent } from './modules/home/views/home-page/home-page.component';
import { AuthPageComponent } from './modules/auth/views/auth-page/auth-page.component';
import { SidebarPageComponent } from './modules/sidebar/views/sidebar-page/sidebar-page.component';

export const routes: Routes = [
    // Rutas de paginas
    {
        // path: '' para pagina principal localhost:4200
        path:'',
        component: HomePageComponent
    },
    {
        path:'auth', //Mostrar pagina de autenticación
        component: AuthPageComponent
    },
    {
        path:'sidebar',
        component: SidebarPageComponent
    }
];
