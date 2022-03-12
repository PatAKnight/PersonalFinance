import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { category } from 'src/app/data/category-list';
import { Category } from 'src/app/models/category';
import { Report } from 'src/app/models/report';
import { Transaction } from 'src/app/models/transaction';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.css']
})
export class ReportDetailsComponent implements OnInit {

  id: string = '';
  categoryIndex!: number;
  transactionIndex!: number;
  report: any;
  transactions: Transaction[] = [];
  categories: Category[] = [];
  categoriesList: string[] = [];
  transaction: Transaction = new Transaction;

  constructor(
    private route: ActivatedRoute,
    private reportService: ReportService,
    private router: Router
  ) { }

  //Sets the report to be read using the id that was sent from the report-list
  ngOnInit(): void {
    this.report = new Report();
    this.id = this.route.snapshot.params['id'];

    //Sets the categories using the saved category-list
    this.categoriesList.length = 14;
    for(let i = 0; i < this.categoriesList.length; i++){
      this.categoriesList[i] = category[i];
    }

    this.reportService.getReport(this.id)
    .subscribe(report => {this.report = report;});
  }

  addTransaction(): void{
    this.router.navigate(['addtransaction', this.id]);
  }

  updateTransaction(i: number, j: number): void{
    this.categoryIndex = i;
    this.transactionIndex = j;
    this.router.navigate(['updatetransaction', this.id, this.categoryIndex, this.transactionIndex]);
  }

  deleteTransaction(i: number, j: number): void{
    this.categoryIndex = i;
    this.transactionIndex = j;
    this.router.navigate(['deletetransaction', this.id, this.categoryIndex, this.transactionIndex]);
  }

  //Returns to the home page
  goHome(){
    this.router.navigate(['reports']);
  }
}

