/*import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'

const configureStore = (preloadedState) => {
  const store = createStore(
  	rootReducer,
  	preloadedState,
  	applyMiddleware(thunkMiddleware, createLogger())
  	)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}

export default configureStore*/