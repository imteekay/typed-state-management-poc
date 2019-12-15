import { INCREMENT, DECREMENT, UPDATE, TYPE_ERROR, CounterState, CounterActionsType } from './types';

const initialState: CounterState = 0;

export default (state = initialState, action: CounterActionsType): CounterState => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case UPDATE:
      return action.payload.value;
    case TYPE_ERROR:
      return initialState;
    default:
      return state
  }
}
