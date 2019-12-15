import { INCREMENT, DECREMENT, UPDATE, CounterActionsType } from './types';

export const incrementAction = (): CounterActionsType => ({
  type: INCREMENT,
});

export const decrementAction = (): CounterActionsType => ({
  type: DECREMENT,
});

export const updateValueAction = (value: any): CounterActionsType => ({
  type: UPDATE,
  payload: {
    value,
  },
});
