import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { SpreadsheetTop } from '../shared/model';

@Component({
  selector: 'app-spreadsheet-top',
  templateUrl: './spreadsheet-top.component.html',
  styleUrls: ['./spreadsheet-top.component.css']
})
export class SpreadsheetTopComponent {

  public db!: SpreadsheetTop[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<SpreadsheetTop[]>(baseUrl + 'spreadsheet').subscribe(
      {
        next: (result) => this.db = result,
        error: (e) => console.log(e),
        complete: () => console.info('db loading complete')
      })
  }
}
