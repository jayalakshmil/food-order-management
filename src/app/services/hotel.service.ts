import { Injectable } from '@angular/core';
import { RegistrationComponent } from '../account/register.component';
import { Food } from '../models/food';
import { Restaurant } from '../models/restaurant';
import { EventEmitter } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  foodSelected = new EventEmitter<Food>();

  restaurants : Restaurant[];
  selectedFoodMenu : Food[];
  
  constructor() { }
  getHotels() {
    this. restaurants =[
      {
        id :1,
        title : 'Indian Restaurant',
        text  : 'Subway',
        image : 'assets/images/rest1.jpg',
        food:[
         { name : ' chicken biryani',
          images: 'assets/food-images/1.jpg',
          description : 'this is test description',
          price : 40
         
         },
         { name : 'mutton biryani',
         images: 'assets/food-images/2.jpeg',
         description : 'this is test description',
          price : 60
         
         },
         { name : 'Prawn biriyani',
         images: 'assets/food-images/prawn-biryani.jpg',
         description : 'this is test description',
          price : 40
         
         },
         { name : 'Fish biriyani',
         images: 'assets/food-images/fish.jpg',
         description : 'this is test description',
          price : 50
         
         },
         { name : 'Chicken Tandoori',
         images: 'assets/food-images/chicken_tandoori.jpg',
         description : 'this is test description',
          price : 40
         
         },
         { name : 'Fish Fry',
         images: 'assets/food-images/fish-fry.jpg',
         description : 'this is test description',
          price : 40
         
         }]
      },
      {
        id:2,
        title : 'Chinese Restaurant',
        text  : 'Subway',
        image : 'assets/images/rest2.jpg',
        food:[
          { name : 'mutton biryani',
          images: 'assets/food-images/2.jpeg',
          description : 'this is test description',
          price : 60
          
          },
          ]
      },
      {
        id :3,
        title : 'Western Restaurant',
        text  : 'Subway',
        image : 'assets/images/rest3.jpg',
        food:[
          { name : 'Prawn biriyani',
          images: 'assets/food-images/prawn-biryani.jpg',
          description : 'this is test description',
          price : 40
          
          }]
      },
      {
        id:4,
        title : 'Italian Restaurant',
        text  : 'Subway',
        image : 'assets/images/rest4.jpg',
        food:[
          { name : 'Fish biriyani',
          images: 'assets/food-images/fish.jpg',
          description : 'this is test description',
          price : 50
          
          }]
      },
      {
        id :5,
        title : 'Mexican Restaurant',
        text  : 'Subway',
        image : 'assets/images/rest5.jpg',
        food:[
          { name : 'Chicken Tandoori',
          images: 'assets/food-images/chicken_tandoori.jpg',
          description : 'this is test description',
          price : 40
          
          }]
      },
      {
        id :6,
        title : 'Kekes Breakfast Cafe',
        text  : 'Subway',
        image : 'assets/images/rest6.jpg',
        food:[
          { name : 'Fish Fry',
          images: 'assets/food-images/fish-fry.jpg',
          description : 'this is test description',
          price : 40
          
          }]
      }
    ]

    return this.restaurants;
  }


  setSelectedHotelFoodMenu(food: Food[]){
    console.log("service::"+JSON.stringify(food))
    this.selectedFoodMenu = food;

  }
  getSelectedHotelFoodMenu(id: number){
    const restaurant = this.getHotels().find(
      (r) => {
        return r.id === id;
      }
    );
    return restaurant.food;
  }
    

}
