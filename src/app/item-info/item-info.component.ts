import { Component, OnInit } from '@angular/core';
import { Item } from '../board-moderator/item';
import { ModeratorService } from '../services/moderator.service';

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.css']
})
export class ItemInfoComponent implements OnInit {
  item: Item[];

  constructor(private moderatorService: ModeratorService) { }

  ngOnInit(): void {
    this.moderatorService.getItems().subscribe(
      (data: Item[]) => {
       this.item = data;
       
      });
  }

}
