import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './state';

export const getState = createFeatureSelector<AppState>('state');

export const selectData = createSelector(getState,
(state: AppState) => state.data
);

export const selectLoadStatus = createSelector(getState,
    (state: AppState) => state.hasLoaded
    );
