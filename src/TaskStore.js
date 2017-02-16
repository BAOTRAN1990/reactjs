import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import taskReducers from './TaskReducers'

const reducers = {
  taskReducers,
  form: formReducer
}

export default createStore(combineReducers(reducers));
