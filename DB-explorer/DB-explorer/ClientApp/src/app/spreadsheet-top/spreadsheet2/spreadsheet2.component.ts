import { Component, Input } from '@angular/core';
import { Spreadsheet2 } from '../../shared/model';

@Component({
  selector: 'app-spreadsheet2',
  templateUrl: './spreadsheet2.component.html',
  styleUrls: ['./spreadsheet2.component.css']
})
export class Spreadsheet2Component {

  @Input() data!: Spreadsheet2;
  constructor() { }

}
