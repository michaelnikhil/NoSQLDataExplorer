import {  createReducer, on } from '@ngrx/store';
import { emptyData } from '../shared/model';
import * as fromActions from './actions';
import { initialState } from './state';

export const apiKeyFeatureKey = 'apiKey';

export const dataReducer = createReducer(
  initialState,
  on(fromActions.loadDataSuccess, (state, action) => ({ ...state, data: action.data, error: null })),
  on(fromActions.loadDataFailure, (state, action) => ({ ...state, data: emptyData, error: action.error })),
);
