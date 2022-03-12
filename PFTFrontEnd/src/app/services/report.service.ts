import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Report } from '../models/report';
import { catchError, Observable, of, throwError } from 'rxjs';

//Service that route the requests to the backend using the url
//Handles the CRUD operations of the Reports
@Injectable({
  providedIn: 'root'
})
export class ReportService {
  constructor(private http: HttpClient) { }
  
  private apiBaseUrl = 'http://localhost:8080/api/'
  private reportsUrl = `${this.apiBaseUrl}reports/`
  private errorMsg: string = '';

  public addReport(report: Report): Observable<Object>{
    return this.http.post<Report>(this.reportsUrl, report)
    .pipe(catchError(error => {
      this.errorMsg = error.message;
      return of([]);
      })
    );
  }

  public getReports(): Observable<Report[]> {
    return this.http.get<Report[]>(this.reportsUrl)
    .pipe(
      catchError(error => {
        this.errorMsg = error.message;
        return of([]);
      })
    );
  }

  public getReport(id: string): Observable<Object> {
    return this.http.get<Report>(this.reportsUrl + id)
    .pipe(
      catchError(error => {
        this.errorMsg = error.message;
        return of([]);
      })
    );
  }

  public updateReport(id: string, value: any): Observable<Object> {
    return this.http.put<Report>(this.reportsUrl + id, value)
    .pipe(
      catchError(error => {
        this.errorMsg = error.message;
        return of([]);
      })
    );
  }

  public deleteReport(id: string): Observable<Object> {
    return this.http.delete<Report>(this.reportsUrl + id)
    .pipe(
      catchError(error => {
        this.errorMsg = error.message;
        return of([]);
      })
    );
  }

}
