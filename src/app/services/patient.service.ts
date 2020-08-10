import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL3 = 'http://localhost:8080/patient/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})

export class PatientService {

  constructor(private http: HttpClient) { }

  add(data): Observable<any> {
    console.log("1");
    return this.http.post(API_URL3, {
      patient_Id: data.patient_Id,
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      phone: data.phone
      
    }, httpOptions);
  }

  update(data): Observable<any> {
    console.log("1");
    return this.http.post(API_URL3, {
      patient_Id: data.patient_Id,
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      phone: data.phone

    }, httpOptions);
  }

  // delete(patient_Id: number): Observable<any> {
  //   console.log(patient_Id);
  //   return this.http.delete(`${API_URL3} + ${id}` ,  { responseType: 'text' });
  // }
}
