/*if (process.env.NODE_ENV === 'production') {
  module.exports = require('./configureStore.prod')
} else {
  module.exports = require('./configureStore.dev')
}
*/
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import rootReducer from '../reducers'

const configureStore = (preloadedState) => createStore(  
  	rootReducer,
  	preloadedState,
  	applyMiddleware(thunkMiddleware)
  ) 

export default configureStore