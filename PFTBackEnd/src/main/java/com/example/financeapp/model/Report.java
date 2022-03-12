package com.example.financeapp.model;

import java.util.List;

import javax.validation.Valid;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/*
 * Report Model class that stores the information for the report
 * Report will have an id, month, date, categories, and amount
 * Uses validation to protect the integrity of the data
 * Regex expression used to validate the date with the format of MM/DD
 */
@Document(collection="reports")
public class Report {
	@Id
	private String id;
	@NotEmpty(message = "Please enter the month for the report")
    private String month;
	@NotEmpty(message = "Please enter the date for the report")
	@Pattern(regexp = "^([0-9]|0[1-9]|1[012])[\\/](0[1-9]|[12][0-9]|3[01])$",
	message = "Please enter the date in the format of MM/DD")
    private String sdate;
	@Valid
    private List<Category> categories;
    private String amount;

    public Report() {
        super();
    }

    //Constructor method that assigns the variables for the report
    public Report(String month, String sdate,List<Category> categories, String amounts){
        this.month = month;
        this.sdate = sdate;
        double total = 0;
    	this.amount = Double.toString(total);
    }
    
    public String getId() {
    	return id;
    }

    public String getMonth(){
        return month;
    }

    public void setMonth(String month){
        this.month = month;
    }
    
    public String getDate() {
    	return sdate;
    }
    
    public void setDate(String sdate) {
    	this.sdate = sdate;
    }
    
    public List<Category> getCategories(){
        return categories;
    }
    
    public void setCategories(List<Category> categories){
        this.categories = categories;
        updateAmount(this.categories);
    }
    
    public void setCategory(Category category){
        this.categories.add(category);
        updateAmount(this.categories);
    }
    
    public String getAmount() {
    	updateAmount(categories);
    	return amount;
    }
    
    public void setAmount(String amounts) {
    	this.amount = amounts;
    	updateAmount(this.categories);
    }
    
    //Helper method that updates the amount whenever there is a new category or transaction added
    public void updateAmount(List<Category> categories) {
    	double total = 0;
    	for(int i = 0; i < categories.size(); i++) {
    		total += Double.parseDouble(categories.get(i).getAmount());
    	}
    	amount = Double.toString(total);
    }
    
    @Override
    public String toString() {
    	return month + sdate + categories.toString() + amount;
    }
}

