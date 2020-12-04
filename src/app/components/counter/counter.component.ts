import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import {
  Init,
  Decrement,
  Reset,
} from '../../stores/counter/counter.actions';

import { AppState, selectCounterState } from '../../stores/app.states';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  counterSubscription: Subscription;
  getCounterState: Observable < any > ;

  counter: number = 0;
  error: string;

  constructor(private store: Store < AppState >) {
    this.getCounterState = this.store.select(selectCounterState);
  }

  ngOnInit(): void {
    this.store.dispatch(new Init({}));
    this.counterSubscription = this.getCounterState.subscribe(state => {
      if (state.updated || state.initSuccess) {
        this.error = null;
        this.counter = state.counter;
      }
      if (state.error) {
        this.error = state.error;
      }
    });
  }

  decrement() {
    // TODO: Dispatch a decrement action
    this.store.dispatch(new Decrement({}));
  }
 
  reset() {
    // TODO: Dispatch a reset action
    this.store.dispatch(new Reset({}));
  }

}
