import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { IEmployee } from './test/employee';


@Injectable({
  providedIn: 'root'
})

export class DataService {

  private _url = "/assets/data/employees_1.json" ; 
  constructor(private http : HttpClient ) { }

  getEmployees() : Observable<IEmployee[]>{
      return this.http.get<IEmployee[]>(this._url)
      .pipe(
        catchError(this.erroHandler)
      );
  }
  
  erroHandler(error: HttpErrorResponse) {
    // return throwError(error.message || 'server Error');

    return throwError(() => new Error( error.message  || 'An error occurred'));
  }

}
