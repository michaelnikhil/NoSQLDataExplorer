import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { PageDisplay, SpreadsheetTop } from '../shared/model';

@Component({
  selector: 'app-spreadsheet-top',
  templateUrl: './spreadsheet-top.component.html',
  styleUrls: ['./spreadsheet-top.component.css']
})
export class SpreadsheetTopComponent implements OnInit {
  showSpreadsheet1 = false;
  showSpreadsheet2 = false;
  ngOnInit(): void {
    
  }

  public db!: SpreadsheetTop;
  public tabs : PageDisplay[]  = [
    {'name':'spreadsheet1','showPage':true},
    {'name':'spreadsheet2','showPage':false}]

  
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<SpreadsheetTop>(baseUrl + 'spreadsheet').subscribe(
      {
        next: (result) => this.db = result,
        error: (e) => console.log(e),
        complete: () => console.info('db loading complete')
      })
  }

  onClick(pageName: string){
    this.tabs.forEach(c=>c.showPage = false);
    this.tabs.filter(c=>c.name==pageName).forEach(c=>c.showPage=true);
    this.showSpreadsheet1 = this.tabs.filter(c=>c.name=='spreadsheet1').map(c=>c.showPage)[0];
    this.showSpreadsheet2 = this.tabs.filter(c=>c.name=='spreadsheet2').map(c=>c.showPage)[0];

    console.log('button clicked ' + pageName);
    console.log('%o', this.tabs);
  }
}
