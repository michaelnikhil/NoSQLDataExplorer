import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SpreadsheetTop } from 'app/shared/model';
import { loadData } from 'app/store/actions';
import { selectData, selectLoadStatus } from 'app/store/selectors';
import { AppState } from 'app/store/state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  db!: Observable<SpreadsheetTop>;

  constructor(private store: Store<AppState>) {

    this.db = this.store.select(selectData);
   }

  ngOnInit(): void {
    this.store.select(selectLoadStatus)
    .subscribe(hasLoaded => {
      if (!hasLoaded) {
 this.store.dispatch(loadData());
}
    });
  }
}
