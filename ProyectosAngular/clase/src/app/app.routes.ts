import { Routes } from '@angular/router';
import { MytestcomponentComponent } from './mytestcomponent/mytestcomponent.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
/* Encargado de buscar los archivos de rutas*/
export const routes: Routes = [
    {
        path:'',
        component: MytestcomponentComponent
    },
    {
        path:'Servicios',
        component: ServiciosComponent
    },
    {
        path:'SideBar',
        component:SidebarComponent
    }
];
