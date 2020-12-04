import { Action } from '@ngrx/store';

export enum CounterActionTypes {
  INIT = '[Counter] - Get Counter',
  INIT_SUCCESS = '[Counter] - Get Counter success',
  INIT_FAILURE = '[Counter] - Get Counter failure',
  DECREMENT = '[Counter] - Decrement Counter',
  DECREMENT_SUCCESS = '[Counter] - Decrement Counter success',
  DECREMENT_FAILURE = '[Counter] - Decrement Counter failure',
  RESET = '[Counter] - Reset Counter',
  RESET_SUCCESS = '[Counter] - Reset Counter success',
  RESET_FAILURE = '[Counter] - Reset Counter failure',
}

export class Init implements Action {
  readonly type = CounterActionTypes.INIT;
  constructor(public payload: any) {}
}

export class InitSuccess implements Action {
  readonly type = CounterActionTypes.INIT_SUCCESS;
  constructor(public payload: any) {}
}

export class InitFailure implements Action {
    readonly type = CounterActionTypes.INIT_FAILURE;
    constructor(public payload: any) {}
}

export class Decrement implements Action {
readonly type = CounterActionTypes.DECREMENT;
constructor(public payload: any) {}
}

export class DecrementSuccess implements Action {
readonly type = CounterActionTypes.DECREMENT_SUCCESS;
constructor(public payload: any) {}
}

export class DecrementFailure implements Action {
    readonly type = CounterActionTypes.DECREMENT_FAILURE;
    constructor(public payload: any) {}
}

export class Reset implements Action {
readonly type = CounterActionTypes.RESET;
constructor(public payload: any) {}
}

export class ResetSuccess implements Action {
readonly type = CounterActionTypes.RESET_SUCCESS;
constructor(public payload: any) {}
}

export class ResetFailure implements Action {
    readonly type = CounterActionTypes.RESET_FAILURE;
    constructor(public payload: any) {}
}

export type All = |
  Init |
  InitSuccess |
  InitFailure |
  Decrement |
  DecrementSuccess |
  DecrementFailure |
  Reset |
  ResetSuccess |
  ResetFailure;
