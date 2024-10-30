import { Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';

export const routes: Routes = [
    {
        path:"form",
        component: FormularioComponent
    },
    {
        path: "",
        redirectTo:"form",
        pathMatch:"full"
    }
];
