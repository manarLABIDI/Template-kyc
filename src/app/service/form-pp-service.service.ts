import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormPPServiceService {

  constructor(private http: HttpClient) {}
  //private apiUrl = 'http://localhost:8022/pp/save';

  submitForm(formData: any): Observable<any> {
    return this.http.post('http://localhost:3000/formPP', formData);
    
  }
  
}