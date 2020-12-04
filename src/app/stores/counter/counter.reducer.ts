import { All, CounterActionTypes } from '../counter/counter.actions';
import _ from 'lodash';

export interface State {
  error: string | null;
  updated: boolean;
  counter: number;
  initSuccess: boolean;
}

export let initialState: State = {
  error: undefined,
  updated: false,
  counter: 0,
  initSuccess: false
};

export function reducer(state = initialState, action: All): State {
  switch (action.type) {
    case CounterActionTypes.INIT:
      {
        initialState = {
          ...state,
          updated: false,
          counter: 0,
          initSuccess: false
        };

        return initialState;
      }
    case CounterActionTypes.INIT_SUCCESS:
      {
        initialState = {
          ...state,
          updated: false,
          initSuccess: true,
          counter: ((state.counter)? state.counter : action.payload.res.value)
        };

        return initialState;
      }
    case CounterActionTypes.INIT_FAILURE:
      {
        initialState = {
          ...state,
          initSuccess: false,
          error: action.payload.error
        };

        return initialState;
      }
    case CounterActionTypes.RESET:
    {
        initialState = {
        ...state,
        updated: false,
        counter: 0,
        initSuccess: false
        };

        return initialState;
    }
    case CounterActionTypes.RESET_SUCCESS:
    {
        initialState = {
        ...state,
        updated: false,
        initSuccess: true,
        counter: ((state.counter)? state.counter : action.payload.res.value)
        };

        return initialState;
    }
    case CounterActionTypes.RESET_FAILURE:
    {
        initialState = {
        ...state,
        initSuccess: false,
        error: action.payload.error.error.error.value
        };

        return initialState;
    }
    case CounterActionTypes.DECREMENT:
    {
        initialState = {
        ...state,
        updated: false,
        initSuccess: false
        };

        return initialState;
    }
    case CounterActionTypes.DECREMENT_SUCCESS:
    {
        initialState = {
        ...state,
        updated: true,
        initSuccess: false,
        counter: action.payload.res.value
    };

        return initialState;
    }
    case CounterActionTypes.DECREMENT_FAILURE:
    {
        initialState = {
        ...state,
        initSuccess: false,
        error: action.payload.error.error.error.value
        };

        return initialState;
    }
    default:
    {
        return state;
    }
  }
}
