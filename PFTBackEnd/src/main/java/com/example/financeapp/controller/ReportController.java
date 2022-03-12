package com.example.financeapp.controller;

import com.example.financeapp.model.Report;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.financeapp.service.ReportService;

import java.util.List;

import javax.validation.Valid;

/*
 * Report Controller that maps the RESTful requests to the Report Service
 * Map requests corresponds to the Create, Read, Update, and Delete operations
 */
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class ReportController {

	private final ReportService reportService;
	
	public ReportController(ReportService reportService) {
		this.reportService = reportService;
	}
	
	@PostMapping("/reports")
	public ResponseEntity<Report> addReport(@RequestBody @Valid Report report) {
		Report newReport = reportService.addReport(report);
		return new ResponseEntity<>(newReport, HttpStatus.CREATED);
	}
	
	@GetMapping("/reports")
	public ResponseEntity<List<Report>> getAllReports() {
		List<Report> reports = reportService.findAllReports();
		return new ResponseEntity<>(reports, HttpStatus.OK);
	}
	
	@GetMapping("/reports/{id}")
	public ResponseEntity<Report> getReport(@PathVariable("id") String id) {
		Report report = reportService.findReportById(id);
		return new ResponseEntity<>(report, HttpStatus.OK);
	}
	
	@PutMapping("/reports/{id}")
	public ResponseEntity<Report> updateReport(@RequestBody Report report) {
		Report updateReport = reportService.updateReport(report);
		return new ResponseEntity<>(updateReport, HttpStatus.OK);
	}
	
	@DeleteMapping("/reports/{id}")
	public ResponseEntity<?> deleteReport(@PathVariable("id") String id){
		reportService.deleteReport(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
}

