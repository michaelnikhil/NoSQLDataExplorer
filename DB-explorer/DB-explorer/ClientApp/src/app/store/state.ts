import { emptyData, SpreadsheetTop } from '../shared/model';

export interface AppState {
    data: SpreadsheetTop
  }

  export const initialState: AppState = {
    data: emptyData
  };
