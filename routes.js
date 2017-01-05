import React from 'react'
import { Route , IndexRoute } from 'react-router'
import App from './containers/App'

const Home = (location, callback) => {
  require.ensure([], require => {
    callback(null, require('./components/Home').default)
  }, 'home')
};

const Detail = (location, callback) => {
  require.ensure([], require => {
    callback(null, require('./components/Detail').default)
  }, 'detail')
};

const NotFound = (location, callback) => {
  require.ensure([], require => {
    callback(null, require('./components/NotFound').default)
  }, 'notFound')
};

export default (
	<Route>
		<Route path="/" component={App}>
			<IndexRoute getComponent={Home} />
			<Route path="/home" getComponent={Home} />
			<Route path="/posts/:id" getComponent={Detail} />
		  <Route path="*" getComponent={NotFound} />
		</Route>
	</Route>
)
