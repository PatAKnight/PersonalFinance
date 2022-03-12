package com.example.financeapp.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.financeapp.model.Report;


public interface ReportRepository extends MongoRepository<Report, String> {

}
