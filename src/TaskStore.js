import { createStore } from 'redux'

import taskReducers from './TaskReducers'

export default createStore(taskReducers);
