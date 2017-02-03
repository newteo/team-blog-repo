import React, { Component } from 'react'

// 不要使用 `var` 關鍵字，常量使用 `const`，變量使用 `let`
import styles from './styles.styl'
import mobileStyles from './mobile-styles.styl'
import settings from '../../settings'

export default class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      backgroundDisplay: 'none'
    }
  }

  // 函數方法的命名習慣，動詞優先
  // Object 單行格式 `{ a: { b: {} } }`
  setBackgroundDisplayToBlock() {
    this.setState({ backgroundDisplay: 'block' })
  }

  setBackgroundDisplayToNone() {
    this.setState({ backgroundDisplay: 'none' })
  }

  render() {
    return <div className="footer">
      <div className='contact-info'>
        <div className='company'>
          <a href={settings.website_url}>{settings.company_name}</a>
        </div>
        <div className='wechat' onTouchStart={this.setBackgroundDisplayToBlock.bind(this)}>{settings.locales.zh_CN.wechat_pub}</div>
        <img className='wechat-img' src={`/assets/${require('../../images/wechat.jpg')}`} />
        <div className='opacity-background' style={{display: this.state.backgroundDisplay}}>
          <div className='opacity' onTouchStart={this.setBackgroundDisplayToNone.bind(this)}></div>
          <img className='wechat-img' src={`/assets/${require('../../images/wechat.jpg')}`} />
        </div>
        <div className='email'>{settings.locales.zh_CN.contact_email}</div>
        <p className='email-number'>{settings.contact_email}</p>
      </div>
      <div className='copyright'>Copyright &copy; 2016 newTeo. All rights reserved.</div>
    </div>
  }
}
