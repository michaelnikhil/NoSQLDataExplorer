import { createAction, props } from '@ngrx/store';
import { SpreadsheetTop } from '../shared/model';

export const loadData = createAction(
  '[Data] Load Data'
);

export const loadDataSuccess = createAction(
    '[Data] Load Data Success',
    props<{data: SpreadsheetTop}>()
  );

  export const loadDataFailure = createAction(
    '[Data] Load Data Failure',
    props<{error: any}>()
  );

  export const updateSettings = createAction(
    '[Settings] Update setting',
    props<{setting: any}>()
  );

  export const updateItems = createAction(
    '[Items] Update item',
    props<{item: any}>()
  );

