import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CreateReportComponent } from './report-crud/create-report/create-report.component';
import { ReportDetailsComponent } from './report-crud/report-details/report-details.component';
import { ReportListComponent } from './report-list/report-list.component';
import { UpdateReportComponent } from './report-crud/update-report/update-report.component';
import { DeleteReportComponent } from './report-crud/delete-report/delete-report.component';
import { AddTransactionComponent } from './transaction-crud/add-transaction/add-transaction.component';
import { UpdateTransactionComponent } from './transaction-crud/update-transaction/update-transaction.component';
import { DeleteTransactionComponent } from './transaction-crud/delete-transaction/delete-transaction.component';


const routes: Routes = [
  { path: '', redirectTo: 'reports', pathMatch: 'full'},
  { path: 'reports', component: ReportListComponent},
  { path: 'add', component: CreateReportComponent},
  { path: 'details/:id', component: ReportDetailsComponent},
  { path: 'update/:id', component: UpdateReportComponent},
  { path: 'delete/:id', component: DeleteReportComponent},
  { path: 'addtransaction/:id', component: AddTransactionComponent},
  { path: 'updatetransaction/:id/:categoryIndex/:transactionIndex', component: UpdateTransactionComponent},
  { path: 'deletetransaction/:id/:categoryIndex/:transactionIndex', component: DeleteTransactionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
