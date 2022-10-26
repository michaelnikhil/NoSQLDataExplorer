import { Component, Input } from '@angular/core';
import { emptyData, SpreadsheetTop } from '../../shared/model';

@Component({
  selector: 'app-spreadsheet2',
  templateUrl: './spreadsheet2.component.html',
  styleUrls: ['./spreadsheet2.component.css']
})
export class Spreadsheet2Component {

  @Input()  data: SpreadsheetTop = emptyData;
  constructor() { }

}
