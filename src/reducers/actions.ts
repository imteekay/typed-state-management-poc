import { INCREMENT, DECREMENT, UPDATE, TYPE_ERROR, ERRORS_ENUM, CounterActionsType } from './types';
import { isNumber } from './guards';

export const incrementAction = (): CounterActionsType => ({
  type: INCREMENT,
});

export const decrementAction = (): CounterActionsType => ({
  type: DECREMENT,
});

export const updateValueAction = (value: any): CounterActionsType => {
  const numberValue = Number(value);
  if (isNumber(numberValue)) {
    return ({
      type: UPDATE,
      payload: {
        value: numberValue,
      },
    });
  }

  return ({
    type: TYPE_ERROR,
    payload: {
      message: `Value '${value}' is not a valid number.`,
      errorKey: ERRORS_ENUM.VALUE_IS_NOT_A_NUMBER,
    },
  });
};
