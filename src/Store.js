import { createStore} from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import {browserHistory} from 'react-router'


import rootReducer from './reducers/index'

import App from './App'

const store = createStore(rootReducer, defaultState)
