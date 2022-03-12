import { Category } from "./category";
import { Transaction } from "./transaction";

export class Report {
    id!: string; // internal MongoDB primary key
 // internal MongoDB primary key
    month: string = '';
    categories: Category[] = [];
    amount: string = '';
    date: string = '';
}