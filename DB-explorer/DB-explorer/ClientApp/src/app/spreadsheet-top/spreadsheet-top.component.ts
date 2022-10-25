import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { PageDisplay, SpreadsheetTop } from '../shared/model';
/* eslint-disable no-console */
@Component({
  selector: 'app-spreadsheet-top',
  templateUrl: './spreadsheet-top.component.html',
  styleUrls: ['./spreadsheet-top.component.css']
})
export class SpreadsheetTopComponent {
  showSpreadsheet1 = false;
  showSpreadsheet2 = false;

  public db!: SpreadsheetTop;
  public tabs : PageDisplay[]  = [
    { 'name': 'spreadsheet1', 'showPage': true},
    { 'name': 'spreadsheet2', 'showPage': false}];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<SpreadsheetTop>(`${baseUrl}spreadsheet`).subscribe(
      {
        next: (result) => this.db = result,
        error: (e) => console.log(e),
        complete: () => console.info('db loading complete')
      });
  }

  onClick(pageName: string) {
    this.tabs.forEach(c => c.showPage = false);
    this.tabs.filter(c => c.name === pageName).forEach(c => c.showPage = true);
    this.showSpreadsheet1 = this.tabs.filter(c => c.name === 'spreadsheet1').map(c => c.showPage)[0];
    this.showSpreadsheet2 = this.tabs.filter(c => c.name === 'spreadsheet2').map(c => c.showPage)[0];
  }
}
