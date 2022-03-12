import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReportService } from '../services/report.service';
import { Report } from '../models/report';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css'],
})
export class ReportListComponent implements OnInit {

  reports: Report[] = [];

  constructor(
    private reportService: ReportService,
    private router: Router
  ) { }

  getReports(): void {
    this.reportService.getReports().subscribe(reports => this.reports = reports);
  }

  addReport(): void{
    this.router.navigate(['add']);
  }

  getReport(id: String): void{
    this.router.navigate(['details', id]);
  }

  updateReport(id: String): void{
    this.router.navigate(['update', id]);
  }

  deleteReport(id: string): void{
    this.router.navigate(['delete', id]);
  }

  ngOnInit(): void {
    this.getReports();
  }
}
