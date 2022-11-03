import { createReducer, on } from '@ngrx/store';
import { emptyData, Item, Setting } from '../shared/model';
import * as fromActions from './actions';
import { initialState } from './state';

export const apiKeyFeatureKey = 'apiKey';

export const dataReducer = createReducer(
  initialState,
  on(fromActions.loadDataSuccess, (state, action) => ({ ...state, data: action.data, error: null })),
  on(fromActions.loadDataFailure, (state, action) => ({ ...state, data: emptyData, error: action.error })),
  on(fromActions.updateSettings, (state, action) => {
    const updatedSettings: Setting[] = state.data.spreadsheet1.settings.map(
      (val) => val.id === action.setting.id ? action.setting : val);
    return {
      ...state,
      data: {
        ...state.data,
        spreadsheet1: {
          ...state.data.spreadsheet1,
          settings: updatedSettings
        }
      }
    };
  }
  ),
  on(fromActions.updateItems, (state, action) => {
    const updatedItems: Item[] = state.data.spreadsheet2.items.map(
      (val) => val.id === action.item.id ? action.item : val);
    return {
      ...state,
      data: {
        ...state.data,
        spreadsheet2: {
          ...state.data.spreadsheet2,
          items: updatedItems
        }
      }
    };
  }
  ),
);
