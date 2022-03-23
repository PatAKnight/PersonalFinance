# PersonalFinance
Personal Finance Tracker built with Angular, Spring Boot, and MongoDb

## Table of Contents
* [Introduction](#Introduction)
* [Technologies](#Technologies)
* [Setup](#Setup)
* [Functionality](#Functionality)
* [Usage](#Usage)
* [Future Functionality](#Future-Functionality)
* [Sources](#Sources)

## Introduction
Tracking monthly expenses can be a daunting task. PersonalFinance helps to alleviate this problem by organizing expenses into monthly reports. PersonalFinance aims to simplify the approach of expenditure tracking

This project was created to learn common full stack technologies. Angular and Spring Boot are both popular technologies in software development at the moment. I wanted to gain more experience using the two so I spent a week reading up on the topics and built this project as a result. I chose finance as the topic because managing my own personal finances has always been important to me. 

## Technologies
#### FrontEnd
* Angular 13.2.5
* Node 14.19.0
* Languages used: HTML, CSS, Typescript
#### BackEnd
* Spring Boot 2.6.4
* Maven 3.8.4
* Language used: Java
#### Database
* MongoDB 5.0.3

## Setup
* Clone the application
`git clone https://github.com/SNHUPatKnight/PersonalFinance.git`

* Navigate to the Backend folder to run the backend using maven
```
cd .\PersonalFinance\PFTBackEnd\
mvn spring-boot:run
```
* The backend will load on http://localhost:8080

* Navigate to the Frontend folder to run the frontend using npm
```
cd .\PersonalFinance\PFTFrontEnd\
ng serve
```
* The frontend will load on http://localhost:4200

## Functionality
* Create, Read, Update, Delete Reports
* Create, Read, Update, Delete Transactions
* Transactions are organized  by Categories which are organized  by Reports
     * Report -> Categories -> Transactions
* Input Validation
     * Frontend validation to provide instant feedback to users
     * Backend validation to protect data integrity

## Usage 
Create a report by entering the month and date
![add-report](https://user-images.githubusercontent.com/82788581/158025173-bfcadf29-e62c-4b05-92d3-60c7f1d65aab.png)

View the saved reports
![report-list](https://user-images.githubusercontent.com/82788581/158025183-5a3f0da0-0373-4b5e-9888-e977fc714ec3.png)

Edit the report
![update-report](https://user-images.githubusercontent.com/82788581/158025192-dc242929-2c3e-4155-939b-365d3f647b4d.png)

Delete the report
![delete-report](https://user-images.githubusercontent.com/82788581/158025200-28656907-01f8-49b3-ac53-c00be1d72129.png)

Create transaction by entering the name, date, amount, category, and subcategory
![add-transaction](https://user-images.githubusercontent.com/82788581/158025207-1ece5f26-452d-4c7b-a382-63b3aff8c5e7.png)

View the saved transactions for the given month
![transaction-list](https://user-images.githubusercontent.com/82788581/158025219-55696b3e-6757-4350-880d-4606692ca8bf.png)

Edit the transaction
![update-transaction](https://user-images.githubusercontent.com/82788581/158025226-1d7694b3-dc0d-46aa-a8d7-ecaca70d39f0.png)

Delete the transaction
![delete-transaction](https://user-images.githubusercontent.com/82788581/158025238-996564d9-2e3b-43bf-a1ab-d7b3d8215d77.png)

## Future Functionality
* Implement Login with Authorization
* Add a feature for tracking Savings accounts
* Add a feature for tracking Debt accounts
* Add an Admin account to handle user accounts

## Sources
This project was meant as a learning experience that involved working with new technologies. These amazing tutorials helped in getting me started with Angular and Spring Boot
* [Spring Boot + Angular + MongoDB CRUD Example Tutorial](https://www.javaguides.net/2019/12/spring-boot-angular-mongodb-crud-example-tutorial.html)
     * Author: Ramesh Fadatare
     * Simple Employee management application that uses CRUD operations
* [Spring Boot + Angular + MongoDB Rest API Tutorial](https://www.callicoder.com/spring-boot-mongodb-angular-js-rest-api-tutorial/)
     * Author: Rajeev Singh
     * Simple Todo application that uses CRUD operations
