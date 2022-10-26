import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PageDisplay, SpreadsheetTop } from '../shared/model';
import { loadData } from '../store/actions';
import { selectData } from '../store/selectors';
import { AppState } from '../store/state';
/* eslint-disable no-console */
@Component({
  selector: 'app-spreadsheet-top',
  templateUrl: './spreadsheet-top.component.html',
  styleUrls: ['./spreadsheet-top.component.css']
})
export class SpreadsheetTopComponent implements OnInit {

   db!: Observable<SpreadsheetTop>;

  constructor(private store: Store<AppState>) {
    this.db = this.store.select(selectData);
   }

  ngOnInit(): void {
    this.store.dispatch(loadData());

  }

  showSpreadsheet1 = false;
  showSpreadsheet2 = false;

  public tabs : PageDisplay[]  = [
    { 'name': 'spreadsheet1', 'showPage': true},
    { 'name': 'spreadsheet2', 'showPage': false}];

  onClick(pageName: string) {
    this.tabs.forEach(c => c.showPage = false);
    this.tabs.filter(c => c.name === pageName).forEach(c => c.showPage = true);
    this.showSpreadsheet1 = this.tabs.filter(c => c.name === 'spreadsheet1').map(c => c.showPage)[0];
    this.showSpreadsheet2 = this.tabs.filter(c => c.name === 'spreadsheet2').map(c => c.showPage)[0];
  }
}

