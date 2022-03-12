import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Report } from 'src/app/models/report';
import { Transaction } from 'src/app/models/transaction';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-create-report',
  templateUrl: './create-report.component.html',
  styleUrls: ['./create-report.component.css']
})
export class CreateReportComponent implements OnInit {

  report: Report = new Report();
  month!: string;
  submitted = false;

  constructor(
    private reportService: ReportService,
    private router: Router) { }

  ngOnInit() {
  }

  save() {
    this.reportService.addReport(this.report)
      .subscribe(error => console.log(error));
      this.report = new Report();
      this.goHome();
  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }

  //Returns to the home page
  goHome(){
    this.router.navigate(['reports']);
  }
}
