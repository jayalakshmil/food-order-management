import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { OrderService } from '../../services/order.service';

@Component({ templateUrl: 'order-tracking.component.html' })
export class OrderTrackingComponent implements OnInit {
  orders = null;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.getAllOrders()
      .pipe(first())
      .subscribe(orders => this.orders = orders);
  }
}