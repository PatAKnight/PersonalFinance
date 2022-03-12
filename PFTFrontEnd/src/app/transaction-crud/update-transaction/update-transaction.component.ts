import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConnectableObservable } from 'rxjs';
import { category } from 'src/app/data/category-list';
import { subcategory } from 'src/app/data/subcategory-list';
import { Category } from 'src/app/models/category';
import { Report } from 'src/app/models/report';
import { Transaction } from 'src/app/models/transaction';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-update-transaction',
  templateUrl: './update-transaction.component.html',
  styleUrls: ['./update-transaction.component.css']
})
export class UpdateTransactionComponent implements OnInit {

  id: string = '';
  categoryIndex!: number;
  transactionIndex!: number;
  categoryList: string[] = [];
  subCategoryList: string[] = [];
  updateReport: any;
  category: Category = new Category();
  updatedCategory: Category = new Category();
  transaction: Transaction = new Transaction();
  submitted = false;
  changed = false;
  originalName = '';

  constructor(
    private reportService: ReportService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  //Transaction to be updated using the transaction index, category index, and report id
  ngOnInit(): void {
    this.updateReport = new Report();
    this.id = this.route.snapshot.params['id'];
    this.categoryIndex = this.route.snapshot.params['categoryIndex'];
    this.transactionIndex = this.route.snapshot.params['transactionIndex']

    //Sets the category list using the save category-list
    this.categoryList.length = 14;
    for(let i = 0; i < this.categoryList.length; i++){
      this.categoryList[i] = category[i];
    }

    //Sets the report that will be updated, the category, the transaction, and the original name for the category
    //Due to the way information is coupled, I had to use a variable that saved the original name of the category if the category was changed. 
    this.reportService.getReport(this.id)
    .subscribe(report => {
      this.updateReport = report;
      this.category = this.updateReport.categories[this.categoryIndex];
      this.transaction = this.category.transactions[this.transactionIndex];
      this.originalName = this.category.name;
      this.onCreateSubCategory();
    })
  }

  //Checks if the category has changed and updates the category list
  //Also updates a flag that will be used for updating the new category
  categoryChange($event: any){
    this.subCategoryList = subcategory[$event.target.selectedIndex];
    if(this.originalName !== $event.target.value){
      this.changed = true;
      this.isWithinCategories(this.categoryIndex);
    } else {
      this.changed = false;
    }
    
  }

  save(){
    //Checks if the category has changed from the original
    //If the category has changed we want check if the category is within the report's categories+
    //If the category is not within the list, we want to add the new category to the report
    //If the category did not change, then will update the transaction within the original category
    if(this.changed){
      if(this.isWithinCategories(this.categoryIndex) > -1){
        this.updateReport.categories[this.isWithinCategories(this.categoryIndex)].transactions.push(this.transaction);
        this.removeTransaction();
      } else {
        this.updatedCategory.name = this.category.name;
        this.updatedCategory.transactions.push(this.transaction);
        this.updateReport.categories.push(this.updatedCategory);
        this.removeTransaction();
      }
    } else {
      this.updateReport.categories[this.categoryIndex].transactions.splice(this.transactionIndex, 1, this.transaction);
    }
    this.reportService.updateReport(this.id, this.updateReport)
    .subscribe(error => console.log(error));
    this.goHome();
  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }

  //Returns to the home page
  goHome(){
    this.router.navigate(['details', this.id]);
  }

  //Sets the category list using the save category-list
  onCreateSubCategory(){
    for(let i = 0; i < this.categoryList.length; i++){
      if(this.category.name === this.categoryList[i]){
        this.subCategoryList = subcategory[i];
      }
    }
  }

  //Checks if the category is already present in the report and return the index of that category\
  //If it is not present it will return a negative one
  isWithinCategories(currentIndex: number): number{
    for(let i = 0; i < this.updateReport.categories.length; i++){
      if(this.category.name === this.updateReport.categories[i].name && this.categoryIndex != i){
        return i;
      }
    }
    return -1;
  }

  //Removes the old transaction from the report using the category index and transaction index
  //If the category is now empty it will remove the category from the report
  removeTransaction(){
    this.updateReport.categories[this.categoryIndex].transactions.splice(this.transactionIndex, 1);
    if(this.updateReport.categories[this.categoryIndex].transactions.length === 0){
      this.updateReport.categories.splice(this.categoryIndex, 1);
    };
    this.category.name = this.originalName;
  }
  
}
