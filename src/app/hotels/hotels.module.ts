import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelsRoutingModule } from './hotels-routing.module';
import { HotelsComponent } from './hotels.component';
import {  HotelsListComponent } from './hotels-list.component';
import { FoodListComponent } from './food/food-list/food-list.component';
import { FoodDetailsComponent } from './food/food-details/food-details.component';
import { FoodComponent } from './food/food.component'


@NgModule({
  declarations: [
    HotelsComponent,
    HotelsListComponent,
    FoodListComponent,
    FoodDetailsComponent,
    FoodComponent
   ],
  imports: [
    CommonModule,
    HotelsRoutingModule
  ]
})
export class HotelsModule { }
