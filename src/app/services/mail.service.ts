import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenStorageService } from '../_services/token-storage.service';

const API_URL = 'http://localhost:8080/send-mail/';

@Injectable({
  providedIn: 'root'
})

export class MailService {
  currentUser: any;

  constructor(private http: HttpClient, private tokenStorageService: TokenStorageService) { }

httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


// sendEmail() {
//     this.currentUser = this.tokenStorageService.getUser();
//     console.log(this.currentUser.email);
//     return this.http.post(API_URL, {
//         emailAddress: this.currentUser.email,
//         subject: "Signed In",
//         bodyText: this.currentUser.username + " you are Signed In!"
//     },this.httpOptions).subscribe();
// }

sendOtherEmail(form: { email: any; }) {
  return this.http.post(API_URL, {
    emailAddress: form.email,
    subject: "Plasma Donation!",
    bodyText: " You are eligible for Plasma Donation!"
  }, this.httpOptions).subscribe();
}
}
