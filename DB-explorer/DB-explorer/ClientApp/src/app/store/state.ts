import { emptyData, SpreadsheetTop } from '../shared/model';

export interface AppState {
  hasLoaded: boolean;
    data: SpreadsheetTop;
  }

  export const initialState: AppState = {
    hasLoaded: false,
    data: emptyData

  };
