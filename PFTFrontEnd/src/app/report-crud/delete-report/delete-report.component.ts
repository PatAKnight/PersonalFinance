import { getLocaleMonthNames } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Report } from 'src/app/models/report';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-delete-report',
  templateUrl: './delete-report.component.html',
  styleUrls: ['./delete-report.component.css']
})
export class DeleteReportComponent implements OnInit {

  id!: string;
  report: any;
  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private reportService: ReportService,
    private router: Router
  ) { }

  //Sets the report to be deleted using the id that was sent from the report-list
  ngOnInit(): void {
    this.report = new Report();
    this.id = this.route.snapshot.params['id'];

    this.reportService.getReport(this.id)
    .subscribe(report => {
      this.report = report;
    });
  }

  deleteReport(): void {
    this.reportService.deleteReport(this.id)
    .subscribe(error => console.log(error));
    this.goHome();
  }
  
  onSubmit(){
    this.submitted = true;
    this.deleteReport();
  }

  //Returns to the home page
  goHome(){
    this.router.navigate(['reports']);
  }
}
