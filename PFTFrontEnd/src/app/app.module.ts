import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportListComponent } from './report-list/report-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CreateReportComponent } from './report-crud/create-report/create-report.component';
import { ReportDetailsComponent } from './report-crud/report-details/report-details.component';
import { UpdateReportComponent } from './report-crud/update-report/update-report.component';
import { DeleteReportComponent } from './report-crud/delete-report/delete-report.component';
import { AddTransactionComponent } from './transaction-crud/add-transaction/add-transaction.component'
import { UpdateTransactionComponent } from './transaction-crud/update-transaction/update-transaction.component';
import { DeleteTransactionComponent } from './transaction-crud/delete-transaction/delete-transaction.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportListComponent,
    CreateReportComponent,
    ReportDetailsComponent,
    UpdateReportComponent,
    DeleteReportComponent,
    AddTransactionComponent,
    UpdateTransactionComponent,
    DeleteTransactionComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
