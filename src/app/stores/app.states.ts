import { createFeatureSelector } from '@ngrx/store';
import * as counter from './counter/counter.reducer';

export interface AppState {
  counterState: counter.State;
}

export const reducers = {
  counter: counter.reducer,
};

export const selectCounterState = createFeatureSelector<AppState>('counter');