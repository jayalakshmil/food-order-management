import { Component, OnInit, Input } from '@angular/core';
import { Food } from '../../../models/food';
import { HotelService } from '../../../services/hotel.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  @Input()   foodMenu: Food;


  restaurantId: number;


  constructor(
    private hotelService: HotelService) { }

  ngOnInit(): void {

    
  }

  onSelected(){
    this.hotelService.foodSelected.emit(this.foodMenu);
  }

}
