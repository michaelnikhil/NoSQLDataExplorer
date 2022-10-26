import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpreadsheetTop } from './model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

private url: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.url = baseUrl;
  }

  public getData(): Observable<SpreadsheetTop> {
    return this.http.get<SpreadsheetTop>(`${this.url}spreadsheet`);
  }
}
