import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SpreadsheetTop } from 'app/shared/model';
import { flatten } from 'flatten-anything';

@Component({
  selector: 'app-json-flat',
  templateUrl: './json-flat.component.html',
  styleUrls: ['./json-flat.component.css']
})
export class JsonFlatComponent implements OnChanges {


  @Input() db!: SpreadsheetTop;
  flattenObject!: Record<string, any>;
  constructor() {

  }
  ngOnChanges(changes: SimpleChanges): void {
    this.flattenObject = flatten(this.db)
    }

}
