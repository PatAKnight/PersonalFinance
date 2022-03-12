package com.example.financeapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.financeapp.model.Report;
import com.example.financeapp.repository.ReportRepository;
import com.example.financeapp.exception.ReportNotFoundException;

/*
 * Report Service class that handles the calls to the database
 * Utilizes Create, Read, Update, and Delete operations when communicating to the database
 */
@Service
public class ReportService {
	private final ReportRepository reportRepo;
	
	@Autowired
	public ReportService(ReportRepository reportRepo) {
		this.reportRepo = reportRepo;
	}
	
	//Create
	public Report addReport(Report report) {
		return reportRepo.save(report);
	}
	
	//Read
	public List<Report> findAllReports() {
		return reportRepo.findAll();
	}
	
	//Read
	public Report findReportById(String id) {
		return reportRepo.findById(id)
				.orElseThrow(() -> new ReportNotFoundException("Report by id " + id + " was not found"));
	}
	
	//Update
	public Report updateReport(Report report) {
		return reportRepo.save(report);
	}
	
	//Delete
	public void deleteReport(String id) {
		reportRepo.deleteById(id);
	}
}

