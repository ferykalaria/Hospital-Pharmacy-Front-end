import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL1 = 'http://localhost:8080/item/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class ModeratorService {

  constructor(private http: HttpClient) { }

  add(data): Observable<any> {
    console.log("1");
    return this.http.post(API_URL1, {
      id: data.item_id,
      name: data.item_name,
      total_number: data.total_number
    }, httpOptions);
  }

  update(data): Observable<any> {
    console.log("1");
    return this.http.post(API_URL1, {
      id: data.item_id,
      name: data.item_name,
      total_number: data.total_number
    }, httpOptions);
  }

  delete(id: number): Observable<any> {
    console.log(id);
    return this.http.delete(`${API_URL1} + ${id}` ,  { responseType: 'text' });
  }

  getItems(): Observable<any> {
    
    return this.http.get(`${API_URL1}`);
  }

}
