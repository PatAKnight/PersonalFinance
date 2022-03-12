# PersonalFinance
Tracking monthly expenses can be a daunting task. PersonalFinance helps to alleviate this problem by organizing  expenses into monthly reports. PersonalFinance aims to simplify the approach of expenditure tracking

This project was created to learn common full stack technologies. Angular and Spring Boot are both popular technologies in software development at the moment. I wanted to gain more experience using the two so I spent a week reading up on the topics and built this project as a result. I chose finance as the topic because managing my own personal finances has always been important to me. 

## Table of Contents
Technologies
Setup
Functionality
Usage
Future Plans
Sources

## Technologies
### FrontEnd
* Angular 13.2.5
* Node 14.19.0
* Languages used: HTML, CSS, Typescript
### BackEnd
* Spring Boot 2.6.4
* Languages used: Java
###Database
* MongoDB 5.0.3

## Setup

* Clone the application
* `git clone https://github.com/SNHUPatKnight/PersonalFinance.git

* Navigate to the Backend folder to run the backend using maven
* `cd PFTBackEnd
* `mvn spring-boot:run
* The backend will load on http://localhost:8080

* Navigate to the Frontend folder to run the frontend using npm
* `cd PFTFrontEnd
* `npm serve
* The frontend will load on http://localhost:4200

## Functionality
* Create, Read, Update, Delete Reports
* Create, Read, Update, Delete Transactions
* Transactions are organizing  by Categories which are organizing  by Reports
     * Report
              * Categories
                           * Transactions
* Input Validation
     * Frontend validation to provide instant feedback to users
     * Backend validation to protect data integrity

## Usage 
