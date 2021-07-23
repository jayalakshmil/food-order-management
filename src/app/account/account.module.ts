import { NgModule } from '@angular/core';
import { ReactiveFormsModule, } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AlertService } from '../services/alert.service';
import { AccountService } from '../services/account.service'

import { AccountRoutingModule } from './account-routing.module';
import { RegistrationComponent } from './register.component';
import { LoginComponent } from './login.component';
import { ForgotPasswordComponent } from './forgot-pwd.component';
import { AccountComponent } from './account.component';
import { from } from 'rxjs';



@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AccountRoutingModule
    ],
    declarations: [
        RegistrationComponent,
        LoginComponent,
        ForgotPasswordComponent,
        AccountComponent,
    ],
    providers : [
        // AlertService,
        // AccountService
    ]
})
export class AccountModule { }