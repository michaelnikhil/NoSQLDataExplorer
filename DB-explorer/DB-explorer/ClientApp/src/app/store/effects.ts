import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as fromActions from './actions';
import { DataService } from '../shared/DataService';
import { loadDataFailure, loadDataSuccess } from './actions';

@Injectable()
export class AppEffects {

  loadData$ = createEffect(() => this.actions$.pipe(
      ofType(fromActions.loadData),
      switchMap(() =>
        this.dataService.getData().pipe(
          map(data => loadDataSuccess({data})),
          catchError(
            error => of(loadDataFailure({error}))
          )
        ))
    ));

  constructor(private actions$: Actions,
              private dataService: DataService) {
  }
}
