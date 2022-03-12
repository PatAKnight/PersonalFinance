import { Transaction } from "./transaction";

export class Category {
    id!: string; // internal MongoDB primary key
 // internal MongoDB primary key
    name: string = '';
    transactions: Transaction[
    ] = [];
    amounts: string = '';
    date: string = '';
}