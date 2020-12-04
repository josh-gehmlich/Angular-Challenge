import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { map, mergeMap, catchError } from 'rxjs/operators';
import {
    Init,
    InitFailure,
    InitSuccess,
    Reset,
    ResetSuccess,
    ResetFailure,
    Decrement,
    DecrementFailure,
    DecrementSuccess,
    CounterActionTypes
} from './counter.actions';

@Injectable()
export class CounterEffects {

  @Effect()
  Init: Observable < any > = this.actions.pipe(
    ofType(CounterActionTypes.INIT),
    mergeMap( () =>
      this.apiService.init().pipe(
        map(data => {
          if (data) { return new InitSuccess(data); } else { return new InitFailure({ error: 'Error!' }); }
        }),
        catchError(err => {
          return of(new InitFailure({ error: err }));
        })
      )
      ));

  @Effect({ dispatch: false })
  InitSuccess: Observable < any > = this.actions.pipe(
    ofType(CounterActionTypes.INIT_SUCCESS)
  );

  @Effect({ dispatch: false })
  InitFailure: Observable < any > = this.actions.pipe(
    ofType(CounterActionTypes.INIT_FAILURE)
  );

  @Effect()
  Decrement: Observable < any > = this.actions.pipe(
    ofType(CounterActionTypes.DECREMENT),
    mergeMap( () =>
      this.apiService.decrement().pipe(
      map(data => {
        if (data) { return new DecrementSuccess(data); } else { return new DecrementFailure({ error: 'Error!' }); }
      }),
      catchError(err => {
        return of(new DecrementFailure({ error: err }));
      }))));

  @Effect({ dispatch: false })
  DecrementSuccess: Observable < any > = this.actions.pipe(
    ofType(CounterActionTypes.DECREMENT_SUCCESS)
  );

  @Effect({ dispatch: false })
  DecrementFailure: Observable < any > = this.actions.pipe(
    ofType(CounterActionTypes.DECREMENT_FAILURE)
  );

  @Effect()
  Reset: Observable < any > = this.actions.pipe(
    ofType(CounterActionTypes.RESET),
    mergeMap( () =>
      this.apiService.reset().pipe(
      map(data => {
        if (data) { return new ResetSuccess(data); } else { return new ResetFailure({ error: 'Error!' }); }
      }),
      catchError(err => {
        return of(new ResetFailure({ error: err }));
      })
      )));

  @Effect({ dispatch: false })
  ResetSuccess: Observable < any > = this.actions.pipe(
    ofType(CounterActionTypes.RESET_SUCCESS)
  );

  @Effect({ dispatch: false })
  ResetFailure: Observable < any > = this.actions.pipe(
    ofType(CounterActionTypes.RESET_FAILURE)
  );

  constructor(
    private actions: Actions,
    private apiService: ApiService
  ) {}
}
