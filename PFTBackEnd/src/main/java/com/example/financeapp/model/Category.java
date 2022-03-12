package com.example.financeapp.model;

import java.util.List;

import javax.validation.Valid;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;

/*
 * Category Model class that stores the information for the model
 * Category will have a name, transactions, and amount
 * Uses validation to protect the data
 */
public class Category {
	@NotEmpty(message = "Please enter the name of the category")
	private String name;
	@Valid
	private List<Transaction> transactions;
	private String amount;
	
	public Category() {
		super();
	}
	
	//Constructor method that assigns the variables for the category
	public Category(String name, List<Transaction> transactions) {
		this.name = name;
		this.transactions = transactions;
		updateAmount(transactions);
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public List<Transaction> getTransactions(){
		return transactions;
	}
	
	public void setTransactions(List<Transaction> transactions) {
		this.transactions = transactions;
		updateAmount(this.transactions);
	}
	
	public String getAmount() {
		return amount;
	}
	
	//Helper method that updates the amount whenever there is a new transaction added
	public void updateAmount(List<Transaction> transactions) {
		double total = 0;
		for(int i = 0; i < transactions.size(); i++) {
			total += Double.parseDouble(transactions.get(i).getAmount());
		}
		amount = Double.toString(total);
	}
	
	@Override
    public String toString(){
        return name + " " + transactions.toString() + " amount: " + amount;
    }
}

