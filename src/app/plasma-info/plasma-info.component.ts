import { Component, OnInit } from '@angular/core';
import { Plasma } from '../board-admin/plasma';
import { Patient } from '../board-admin/patient';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-item',
  templateUrl: './plasma-info.component.html',
  styleUrls: ['./plasma-info.component.css']
})
export class PlasmaInfoComponent implements OnInit {

  plasma: Plasma[];
  patient: Patient[];

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {

      this.adminService.getList().subscribe(
        (data: Plasma[]) => {
         this.plasma = data;
         
        });

        this.adminService.getInfo().subscribe(
          (data: Patient[]) => {
           this.patient = data;
           
          });
    
  }

  

}
