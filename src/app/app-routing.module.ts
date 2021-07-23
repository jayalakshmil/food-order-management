import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_helpers/auth.guard';
import { HomeComponent } from './home/home.component';


const accountModule = () => import('./account/account.module')
.then(x => x.AccountModule);
const hotelsModule = () => import('./hotels/hotels.module')
.then(x => x.HotelsModule);
const usersModule = () => import('./users/users.module')
.then(x => x.UsersModule);
const ordersModule = () => import('./orders/orders.module')
.then(x => x.OrdersModule);




const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard]},
    { path: 'account', loadChildren: accountModule },
    { path: 'orders', loadChildren: ordersModule },
    { path: 'hotels', loadChildren: hotelsModule },


    // otherwise redirect to home
    // { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
