import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Report } from 'src/app/models/report';
import { Transaction } from 'src/app/models/transaction';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-update-report',
  templateUrl: './update-report.component.html',
  styleUrls: ['./update-report.component.css']
})
export class UpdateReportComponent implements OnInit {

  id!: string;
  report: any;
  transactions: Transaction[] = [];
  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private reportService: ReportService,
    private router: Router
  ) { }

  //Sets the report to be updated using the id that was sent from the report-list
  ngOnInit(): void {
    this.report = new Report();
    this.id = this.route.snapshot.params['id'];

    this.reportService.getReport(this.id)
    .subscribe(report => {
      this.report = report;
      this.transactions = this.report.transactions;
    });
  }

  updateReport(): void {
    this.reportService.updateReport(this.id, this.report)
    .subscribe(error => console.log(error));
    this.report = new Report();
    this.goHome();
  }

  onSubmit(){
    this.updateReport();
  }

  //Returns to the home page
  goHome(){
    this.router.navigate(['reports']);
  }
}
