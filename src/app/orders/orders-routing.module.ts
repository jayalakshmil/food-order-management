import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderTrackingComponent } from './order-tracking/order-tracking.component';
import { OrdersComponent } from './orders.component';

const routes: Routes = [
  {
    path: '', component: OrdersComponent,

    children: [
      { path: 'track', component: OrderTrackingComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
