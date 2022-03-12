package com.example.financeapp.model;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;

/*
 * Transaction Model class that stores the information for the transaction
 * Transaction will have a name, date, amount, and subcategory
 * Uses validation to protect the integrity of the data
 * Regex expressions are used for the amount allowing for negative, positive, and numbers with decimals up to two places
 * Also is used to validate the date with the format of MM/DD
 */
public class Transaction {
	@NotEmpty(message = "Please enter the name of the Transaction")
    private String name;
	@NotEmpty(message = "Please enter the date of the Transaction")
	@Pattern(regexp = "^([0-9]|0[1-9]|1[012])[\\/](0[1-9]|[12][0-9]|3[01])$",
		message = "Please enter the date in the format of MM/DD")
    private String date;
	@NotEmpty(message = "Please enter the amount of the Transaction")
	@Pattern(regexp = "^-?(\\d+)(\\.\\d{1,2})?$",
		message = "Please enter a number in the format of 0.00 or -0.00")
    private String amount;
	@NotEmpty(message = "Please enter the subcategory of the Transaction")
    private String subCategory;

    public Transaction() {
    	super();
    }

    //Constructor method that assigns the variables for the transaction
    public Transaction(String name, String date, String amount, String type, String subCategory){
        this.name = name;
        this.date = date;
        this.amount = amount;
        this.subCategory = subCategory;
    }

    public String getName(){
        return name;
    }

    public void setName(String name){
        this.name = name;
    }
    
    public String getDate() {
    	return date;
    }
    
    public void setDate(String date) {
    	this.date = date;
    }

    public String getAmount(){
        return amount;
    }
    
    public String getSubCategory(){
        return subCategory;
    }
    
    public void setSubCategory(String subCategory){
        this.subCategory = subCategory;
    }

    @Override
    public String toString(){
        return name + " date: " + date + " amount: " + amount + " " + " " + subCategory;
    }
}
