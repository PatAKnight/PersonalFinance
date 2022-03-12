import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { category } from 'src/app/data/category-list';
import { list } from 'src/app/data/list';
import { subcategory } from 'src/app/data/subcategory-list';
import { Category } from 'src/app/models/category';
import { Report } from 'src/app/models/report';
import { Transaction } from 'src/app/models/transaction';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent implements OnInit {

  id: string = '';
  report: any;
  categoryList: string[] = []
  subCategoryList: string[] = [];
  category: Category = new Category();
  transaction: Transaction = new Transaction();
  submitted = false;

  constructor(
    private reportService: ReportService,
    private router: Router,
    private route: ActivatedRoute) { }

  //Sets the transaction to be added using the id of the report
  ngOnInit(): void {
    this.report = new Report();
    this.id = this.route.snapshot.params['id'];

    //Sets the category list using the save category-list
    this.categoryList.length = 14;
    for(let i = 0; i < this.categoryList.length; i++){
      this.categoryList[i] = category[i];
    }

    this.reportService.getReport(this.id)
    .subscribe(report => {this.report = report;});
  }

  //Checks if the drop down for the category list has changed and updates the subcategory list 
  categoryChange($event: any){
    this.subCategoryList = subcategory[$event.target.selectedIndex];
  }

  save(){
    if(this.isWithinCategories() > -1){
      //Push to a category that is already in the report
      this.report.categories[this.isWithinCategories()].transactions.push(this.transaction);
    } else {
      //Create a new category in the report
      this.category.transactions.push(this.transaction);
      this.report.categories.push(this.category);
    }

    this.reportService.updateReport(this.id, this.report)
    .subscribe(error => console.log(error));
    this.goHome();
  }

  //Checks if the category is already present in the report and return the index of that category\
  //If it is not present it will return a negative one
  isWithinCategories(): number{
    for(let i = 0; i < this.report.categories.length; i++){
      if(this.report.categories[i].name === this.category.name){
        return i;
      }
    }
    return -1;
  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }

  //Returns to the home page
  goHome(){
    this.router.navigate(['details', this.id]);
  }
}
