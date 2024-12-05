import { Routes } from '@angular/router';
import { AddBookComponent } from './library/components/add-book/add-book.component';
import { DelBookComponent } from './library/components/del-book/del-book.component';
import { UpdateBookComponent } from './library/components/update-book/update-book.component';
import { SearchBooksComponent } from './library/components/search-books/search-books.component';
import { SearchIdBookComponent } from './library/components/search-id-book/search-id-book.component';

export const routes: Routes = [

    {
        path:'addbook',
        component: AddBookComponent
    },
    {
        path:'deletebook',
        component: DelBookComponent
    },
    {
        path:'updatebook',
        component:UpdateBookComponent
    },
    {
        path:'searchBook',
        component:SearchIdBookComponent
    }
    ,{
        path:'home',
        component:SearchBooksComponent
    },
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    }
];
