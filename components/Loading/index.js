import React, { Component } from 'react'

// 不要使用 `var` 關鍵字，常量使用 `const`，變量使用 `let`
// 採用兩個空格，不用縮進
// 誰寫的，自己更正

var css = require('./style.styl')

export default class Loading extends Component {
  render() {
    return (
      <div className='loading'>
        <img src={`/assets/${require('../../images/Loading.gif')}`} />
        <h1><i>加载中...</i></h1>
      </div>
    )
  }
}
