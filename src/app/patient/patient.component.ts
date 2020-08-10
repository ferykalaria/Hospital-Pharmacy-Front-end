import { Component, OnInit } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { MailService } from '../services/mail.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  form: any = {};
  isAdded = false;
  isUpdated = false;
  isDeleted = false;
  isFailed = false;
  errorMessage = '';
  patient_Id: number;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;

  constructor(private patientService: PatientService, private mailService: MailService) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    console.log("hello");
    this.patientService.add(this.form).subscribe(
      _data => {

        console.log(this.patient_Id);
        console.log(this.firstname);
        console.log(this.lastname);
        console.log(this.email);
        console.log(this.phone);

        this.isFailed = false;
        this.isAdded = true;

      },
      err => {
        this.errorMessage = err.error.message;
        this.isFailed = true;
      }
    );
    this.mailService.sendOtherEmail(this.form);
  }

  onUpdate(): void {
    console.log("hello");
    this.patientService.update(this.form).subscribe(
      _data => {

        console.log(this.patient_Id);
        console.log(this.firstname);
        console.log(this.lastname);
        console.log(this.email);
        console.log(this.phone);

        this.isFailed = false;
        this.isUpdated = true;

      },
      err => {
        this.errorMessage = err.error.message;
        this.isFailed = true;
      }
    );
    
  }

  // onDelete(): void {
  //   console.log("hello");
  //   this.patientService.delete(this.form.patient_Id).subscribe(
  //     _data => {

  //       this.isFailed = false;
  //       this.isDeleted = true;

  //     },
  //     err => {
  //       this.errorMessage = err.error.message;
  //       this.isFailed = true;
  //     }
  //   );
  // }


}
