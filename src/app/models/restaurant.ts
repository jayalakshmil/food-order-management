import {Food} from './food'
export interface Restaurant{
    id: number,
    title:string,
    image:string,
    text :string,
    food: Food[]
}