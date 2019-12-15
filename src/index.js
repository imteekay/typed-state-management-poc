import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './components/Counter'
import counter from './reducers'
import { incrementAction, decrementAction, updateValueAction } from './reducers/actions';
import { selectValue } from './reducers/selectors';

const store = createStore(counter)
const rootElement = document.getElementById('root')

const render = () => ReactDOM.render(
  <Counter
    value={selectValue(store.getState())}
    onIncrement={() => store.dispatch(incrementAction())}
    onDecrement={() => store.dispatch(decrementAction())}
    onUpdateValue={(value) => store.dispatch(updateValueAction(value))}
  />,
  rootElement
)

render()
store.subscribe(render)
