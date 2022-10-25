import { Component, Input } from '@angular/core';
import { Spreadsheet2 } from '../../shared/model';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {

  @Input() data!: Spreadsheet2;

  constructor() { }

}
