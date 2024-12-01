import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { LoginTestComponent } from './components/login-test/login-test.component';
import { OtherFormComponent } from './components/other-form/other-form.component';
import { OtherFormCbComponent } from './components/other-form-cb/other-form-cb.component';
import { MyregisterComponent } from './components/myregister/myregister.component';
import { UserManagmentComponent } from './components/user-managment/user-managment.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { FilterUserComponent } from './components/filter-user/filter-user.component';

export const routes: Routes = [
{

    path: 'login',
    component: LoginComponent

},

{

    path: 'register',
    component: RegisterComponent

},

{

    path: 'home',
    component: HomeComponent

},
{
    path:'logintest',
    component: LoginTestComponent
},
{
    path: 'otherform',
    component: OtherFormComponent
},
{
    path: 'register',
    component: RegisterComponent
},
{
    path: 'othercb',
    component: OtherFormCbComponent
},
{
    path: 'myRegister',
    component: MyregisterComponent
},
{
    path: 'myupdate',
    component: UserManagmentComponent
},
{
    path: 'mydelete',
    component: DeleteUserComponent
},
{
    path: 'listusers',
    component: ListUsersComponent
},
{
    path: 'filteruser',
    component: FilterUserComponent
}
,
{
path: '', redirectTo: 'home', pathMatch: 'full'
}
];
