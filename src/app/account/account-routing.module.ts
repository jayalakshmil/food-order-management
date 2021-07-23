import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationComponent } from './register.component';
import { LoginComponent } from './login.component';
//import {  HeaderComponent } from '../header/header.component';
import { AccountComponent } from './account.component';

import { ForgotPasswordComponent } from './forgot-pwd.component';

const routes: Routes = [
    {
        //  path: '', component: HeaderComponent,
        path: '', component: AccountComponent,

        children: [
            { path: 'login', component: LoginComponent },
            { path: 'forgotpassword', component: ForgotPasswordComponent },
            { path: 'register', component: RegistrationComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountRoutingModule { }