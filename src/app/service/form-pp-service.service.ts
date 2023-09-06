import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FormPPServiceService {

  constructor(private http: HttpClient) {}

  submitForm(formData: any): Observable<any> {
    return this.http.post('http://localhost:8022/api/formpp', formData)
      .pipe(
        catchError((error: any) => {
          // Handle the error here
          console.error('An error occurred:', error);
          // You can also re-throw the error to propagate it to the calling component
          return throwError(error);
        })
      );
  }
}
