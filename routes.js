import React from 'react'
import { Route , IndexRoute } from 'react-router'
import App from './containers/App'
import Home from './components/Home'
import Detail from './components/Detail'
import NotFound from './components/NotFound'

// 採用兩個空格，不用縮進
// 表達式最後不加分號
// 不使用難懂的代碼
// 少既是多

export default <Route path="/" component={App}>
  <IndexRoute component={Home} />
  <Route path="/home" component={Home} />
  <Route path="/posts/:id" component={Detail} />
  <Route path="*" component={NotFound} />
</Route>
