import React from 'react'
import { Route , IndexRoute } from 'react-router'
import App from './containers/App'

import Detail from './components/Detail'

import NotFound from './components/NotFound'
import Home from './components/Home'

export default (
	<Route>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="/home" component={Home} />
			<Route path="/posts/:id" component={Detail} />
		  <Route path="*" component={NotFound} />
		</Route>
	</Route>
)
