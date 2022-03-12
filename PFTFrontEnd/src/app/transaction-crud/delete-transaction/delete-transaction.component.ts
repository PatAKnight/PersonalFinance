import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { Report } from 'src/app/models/report';
import { Transaction } from 'src/app/models/transaction';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-delete-transaction',
  templateUrl: './delete-transaction.component.html',
  styleUrls: ['./delete-transaction.component.css']
})
export class DeleteTransactionComponent implements OnInit {

  id!: string;
  categoryIndex!: number;
  transactionIndex!: number;
  report: any;
  transaction: Transaction = new Transaction();
  category: Category = new Category();
  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reportService: ReportService
  ) { }

  //Sets the transaction to be deleted using the transaction index, category index, and the id of the report
  ngOnInit(): void {
    this.report = new Report();
    this.id = this.route.snapshot.params['id'];
    this.categoryIndex = this.route.snapshot.params['categoryIndex']
    this.transactionIndex = this.route.snapshot.params['transactionIndex'];

    this.reportService.getReport(this.id)
    .subscribe(report => {
      this.report = report;
      this.category = this.report.categories[this.categoryIndex];
      this.transaction = this.category.transactions[this.transactionIndex];
    });
  }

  //Removes the transaction from the report and checks if the category is now empty
  //If the category is now empty it will remove the category from the report
  deleteTransaction(): void{
    this.report.categories[this.categoryIndex].transactions.splice(this.transactionIndex, 1);
    if(this.report.categories[this.categoryIndex].transactions.length === 0) {
      this.report.categories.splice(this.categoryIndex, 1)
    }
    this.reportService.updateReport(this.id, this.report)
    .subscribe(error => console.log(error));
    this.goHome();
  }

  onSubmit(){
    this.submitted = true;
    this.deleteTransaction();
  }

  //Returns to the home page
  goHome(){
    this.router.navigate(['details', this.id]);
  }
}
