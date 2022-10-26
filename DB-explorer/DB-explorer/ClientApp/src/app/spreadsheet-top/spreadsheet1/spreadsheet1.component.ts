import { Component, Input } from '@angular/core';
import { emptyData, SpreadsheetTop } from 'src/app/shared/model';

@Component({
  selector: 'app-spreadsheet1',
  templateUrl: './spreadsheet1.component.html',
  styleUrls: ['./spreadsheet1.component.css']
})
export class Spreadsheet1Component {
  @Input()  data: SpreadsheetTop = emptyData;

  constructor() { }

}
