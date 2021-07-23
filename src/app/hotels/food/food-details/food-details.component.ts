import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Order } from 'src/app/models/order';
import { AlertService } from 'src/app/services/alert.service';
import { Food } from '../../../models/food';

import {  OrderService } from '../../../services/order.service';


@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.css']
})
export class FoodDetailsComponent implements OnInit {
  foodList: Food[]=[];
  errorItem : boolean;
  isAddMode: boolean;
  loading = false;
  submitted = false;
  order = new Order()



  @Input()   foodMenu: Food;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private orderService: OrderService,
    private alertService: AlertService
    
) {}

  ngOnInit(): void {
  }
  addToCart(food) {
    if(this.foodList.indexOf(food) === -1) {
      this.foodList.push(food);
      this.errorItem = false;
    }
    else if (this.foodList.indexOf(food) > -1) {
      this.errorItem = true;
    }  
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  removeItem(food) {
    var index = this.foodList.indexOf(food);
    if (index > -1) {
      this.foodList.splice(index, 1);
   }
  }
  total() {
    return this.foodList.reduce((total, item) => total + item.price, 0);
   }

   placeOrder(){
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    this.loading = true;


    this.order.id = this.getRandomInt(1000);
    this.order.menu = this.foodList;
    this.order.username = this.orderService.userValue.firstName;
    this.order.status = 'Placed'
    
    this.orderService.placeOrder(this.order)
        .pipe(first())
        .subscribe({
            next: () => {
                this.alertService.success('Order Placed successfully', { keepAfterRouteChange: true });
                this.router.navigate(['/orders/track'], { relativeTo: this.route });
            },
            error: error => {
                this.alertService.error(error);
                this.loading = false;
            }
        });
}

}
