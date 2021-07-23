import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { Restaurant } from '../models/restaurant';
import { HotelService } from '../services/hotel.service'
import { Food } from '../models/food';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-hotels-list-page',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.css']
})
export class HotelsListComponent implements OnInit {
  restaurants: Restaurant[];
  @Output() featureSelected = new EventEmitter;


  constructor(private hotelService: HotelService,
    private router: Router , private route: ActivatedRoute
  ) {

  }


  ngOnInit(): void {
    this.restaurants = this.hotelService.getHotels();
    this.router.navigate(['/hotels/list']);


  }

  // selectedFoodMenu(food: Food[]) {
    // this.hotelService.setSelectedHotelFoodMenu(food);
    // this.router.navigate(['/hotels/food']).then((e) => {
    //   if (e) {
    //     console.log("Navigation is successful!");
    //   } else {
    //     console.log("Navigation has failed!");
    //   }
    // });
    // this.router.navigate(['/hotels/list']);

  // }
}
