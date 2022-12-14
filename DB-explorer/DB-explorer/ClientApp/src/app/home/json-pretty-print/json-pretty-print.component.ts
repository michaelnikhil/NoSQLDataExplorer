import { Component, Input } from '@angular/core';
import { SpreadsheetTop } from 'app/shared/model';

@Component({
  selector: 'app-json-pretty-print',
  templateUrl: './json-pretty-print.component.html',
  styleUrls: ['./json-pretty-print.component.css']
})
export class JsonPrettyPrintComponent {

  @Input() db!: SpreadsheetTop;


}
