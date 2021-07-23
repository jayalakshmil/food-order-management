import { Component, OnInit } from '@angular/core';
import { Food } from '../../models/food';
import { HotelService } from '../../services/hotel.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css'],
  providers:[HotelService]
})
export class FoodComponent implements OnInit {
  foodMenu : Food[]
  restaurantId: number;
  selectedMenu: Food;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private hotelService: HotelService) { }

  ngOnInit(): void {
    this.restaurantId = +this.route.snapshot.params['id'];
    console.log("Hotel ID::"+this.restaurantId);
    this.foodMenu = this.hotelService.getSelectedHotelFoodMenu(this.restaurantId);
    console.log (this.foodMenu);

     this.hotelService.foodSelected.subscribe(
       (selectedFoodMenu:Food) =>{
         this.selectedMenu=selectedFoodMenu;
       }
     )
  }

}
