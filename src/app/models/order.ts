import { Food } from './food';

export class Order{
    id : number;
    menu : Food[];
    username : string;
    totalamount: number;
    status : string;
}