export type CounterState = number;

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const UPDATE = 'UPDATE';
export const TYPE_ERROR = 'TYPE_ERROR';

export enum ERRORS_ENUM {
  VALUE_IS_NOT_A_NUMBER = 'not_a_number',
};

interface ErrorPayload {
  errorKey: ERRORS_ENUM,
  message: string,
}

interface IncrementAction {
  type: typeof INCREMENT,
};

interface DecrementAction {
  type: typeof DECREMENT,
};

interface UpdateAction {
  type: typeof UPDATE,
  payload: {
    value: number,
  },
};

interface ErrorAction {
  type: typeof TYPE_ERROR,
  payload: ErrorPayload,
}

export type CounterActionsType = IncrementAction | DecrementAction | UpdateAction | ErrorAction;
