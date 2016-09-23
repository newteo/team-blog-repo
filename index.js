
import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from './store/configureStore'

import Root from './containers/Root'

import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()
console.log(injectTapEventPlugin)

const styles = require('./styles/index.styl')

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)


render(  
  <Root store={store} history={history} />,
  document.getElementById('root')
)