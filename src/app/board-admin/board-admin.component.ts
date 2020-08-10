import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';



@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
  

  form: any = {};
  isAdded = false;
  isUpdated = false;
  isDeleted = false;
  isFailed = false;
  errorMessage = '';
  plasma_id: number;
  plasma_type: string;
  date: string;
  agree: string;
  patient_Id: number;
  

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {  
    
  }

  onSubmit(): void {
    console.log("hello");
    this.adminService.add(this.form).subscribe(
      _data => {
        
        console.log(this.plasma_id);
        console.log(this.plasma_type);
        console.log(this.date);
        console.log(this.agree);
        console.log(this.patient_Id);

        this.isFailed = false;
        this.isAdded = true;
       
      },
      err => {
        this.errorMessage = err.error.message;
        this.isFailed = true;
      }
    );
    
  }

  onUpdate(): void {
    console.log("hello");
    this.adminService.update(this.form).subscribe(
      _data => {
        
        console.log(this.plasma_id);
        console.log(this.plasma_type);
        console.log(this.date);
        console.log(this.agree);
        console.log(this.patient_Id);

        this.isFailed = false;
        this.isUpdated = true;
       
      },
      err => {
        this.errorMessage = err.error.message;
        this.isFailed = true;
      }
    );
  }

  onDelete(): void {
    console.log("hello");
    this.adminService.delete(this.form.plasma_id).subscribe(
      _data => {
       
        this.isFailed = false;
        this.isDeleted = true;
       
      },
      err => {
        this.errorMessage = err.error.message;
        this.isFailed = true;
      }
    );
  }


}