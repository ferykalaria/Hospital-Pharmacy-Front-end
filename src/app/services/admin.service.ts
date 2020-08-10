import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL2 = 'http://localhost:8080/plasma/';
const API_URL3 = 'http://localhost:8080/patient/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})

export class AdminService {

  constructor(private http: HttpClient) { }

  add(data): Observable<any> {
    console.log("1");
    return this.http.post(API_URL2, {
      id: data.plasma_id,
      plasma_type: data.plasma_type,
      date: data.date,
      agree: data.agree,
      patient_Id: data.patient_id,
      p:{
        patient_Id: data.patient_id
      }

    }, httpOptions);
  }

  update(data): Observable<any> {
    console.log("1");
    return this.http.post(API_URL2, {
      id: data.plasma_id,
      plasma_type: data.plasma_type,
      date: data.date,
      agree: data.agree,
      patient_Id: data.patient_id,
      p:{
        patient_Id: data.patient_id
      }

    }, httpOptions);
  }

  delete(id: number): Observable<any> {
    console.log(id);
    return this.http.delete(`${API_URL2} + ${id}` ,  { responseType: 'text' });
  }

  getList(): Observable<any> {
    
    return this.http.get(`${API_URL2}`);
  }

  getInfo(): Observable<any> {
    
    return this.http.get(`${API_URL3}`);
  }
}
