import React,{ Component } from 'react'
import { Link } from 'react-router'

// 不要使用 `var` 關鍵字，常量使用 `const`，變量使用 `let`
import style from './style'

export default class Topbar extends Component {
  // 採用兩個空格，不用縮進
  render() {
    return (
      <div className="Topbar">
        <Link to="/home">
          <img id="logo" src={`/assets/${require('../../images/team-logo.png')}`} />
        </Link>
      </div>
    )
  }
}
