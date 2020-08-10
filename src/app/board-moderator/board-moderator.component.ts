import { Component, OnInit } from '@angular/core';
import { ModeratorService } from '../services/moderator.service';


@Component({
  selector: 'app-board-moderator',
  templateUrl: './board-moderator.component.html',
  styleUrls: ['./board-moderator.component.css']
})
export class BoardModeratorComponent implements OnInit {
  
  form: any = {};
  isAdded = false;
  isUpdated = false;
  isDeleted = false;
  isFailed = false;
  errorMessage = '';
  item_id:number;
  item_name:string;
  total_number:string;

  constructor(private moderatorService: ModeratorService) { }

  ngOnInit(): void {  
    
  }

  onSubmit(): void {
    console.log("hello");
    this.moderatorService.add(this.form).subscribe(
      _data => {
        
        console.log(this.item_id);
        console.log(this.item_name);
        console.log(this.total_number);

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
    this.moderatorService.update(this.form).subscribe(
      _data => {
        
        console.log(this.item_id);
        console.log(this.item_name);
        console.log(this.total_number);

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
    this.moderatorService.delete(this.form.item_id).subscribe(
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
