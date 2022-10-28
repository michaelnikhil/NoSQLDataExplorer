import { Component, Input, OnInit } from '@angular/core';
import { Item, Spreadsheet2 } from '../../shared/model';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  @Input() data!: Spreadsheet2;
  dataSource: Item[] = [];

  ngOnInit(): void {
    this.dataSource = this.data.items;
  }
}
