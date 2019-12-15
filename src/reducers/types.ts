export type CounterState = number;

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const UPDATE = 'UPDATE';

type IncrementAction = {
  type: typeof INCREMENT,
};

type DecrementAction = {
  type: typeof DECREMENT,
};

type UpdateAction = {
  type: typeof UPDATE,
  payload: {
    value: number,
  },
};

export type CounterActionsType =
  IncrementAction |
  DecrementAction |
  UpdateAction;
