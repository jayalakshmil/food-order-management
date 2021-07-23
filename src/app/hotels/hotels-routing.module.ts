import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelsComponent } from './hotels.component';
import { HotelsListComponent } from './hotels-list.component';
import { FoodListComponent } from './food/food-list/food-list.component';
import { FoodComponent } from './food/food.component';

const routes: Routes = [
  {
    path: '', component: HotelsComponent,

    children: [
      { path: 'list', component: HotelsListComponent },
      { path : 'food/:id', component : FoodComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelsRoutingModule { }
