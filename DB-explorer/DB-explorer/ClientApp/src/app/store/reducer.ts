import {  createReducer, on } from '@ngrx/store';
import { elementAt } from 'rxjs';
import { emptyData } from '../shared/model';
import * as fromActions from './actions';
import { initialState } from './state';

export const apiKeyFeatureKey = 'apiKey';

export const dataReducer = createReducer(
  initialState,
  on(fromActions.loadDataSuccess, (state, action) => ({ ...state, data: action.data, error: null })),
  on(fromActions.loadDataFailure, (state, action) => ({ ...state, data: emptyData, error: action.error })),
  on(fromActions.updateSettings, (state, action) => {
    const shallow_copy = {...state.data.spreadsheet1.settings};
    let tmp = shallow_copy.map(element => {
      return element.id == action.setting
    })
  }
    
    

    
    // const updatedSettings = state.data.spreadsheet1.settings.map(
    //   (val) => val.id === action.setting.id ?  val : action.setting);

    // return {
    //   ...state,
    //   :updatedSettings
    // };
  
),
);
