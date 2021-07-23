import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { HotelService } from './services/hotel.service';
import { FooterComponent } from './footer/footer.component';

import { fakeBackendProvider } from './_helpers/fake-backend';
import { AlertComponent } from './_components/alert/alert.component';
import { HomeComponent } from './home/home.component';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { OrdersComponent } from './orders/orders.component';
import { OrderService } from './services/order.service';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
   AlertComponent,
   HomeComponent,
   OrdersComponent   

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    HotelService,
    OrderService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    fakeBackendProvider

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
