import { Reducer } from 'react';
import { EActionTypes, TAction } from '../types';

export const initialValue = 0;
export const reducer: Reducer< number, TAction> = (state, action ) => {
  switch (action.type) {
    case EActionTypes.INCREMENT: {
      return state + 1;
    }
    case EActionTypes.DECREMENT: {
      return state - 1;
    }
    case EActionTypes.RESET: {
      return initialValue;
    }
    case EActionTypes.RANDOM:
    case EActionTypes.RANDOM_ASYNC: {
      return action.payload
    }
    default:
      return state;
  }
}