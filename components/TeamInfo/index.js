import React,{ Component } from 'react'

// 不要使用 `var` 關鍵字，常量使用 `const`，變量使用 `let`
// import style from './style'
// 誰寫的，自己更正
var css = require('./style.styl')
var css = require('./mobile-style.styl')

const GITHUB_USER_CONTENT_AVATARS_URL = 'https://avatars.githubusercontent.com'
const users = [
  { id: 10026619, login: 'joephon', name: 'joephon' },
  { id: 9959178, login: 'Godlovekarl', name: 'Godlovekarl' },
  { id: 4101720, login: 'pennyjs', name: 'pennyjs' },
  { id: 17367714, login: 'shenmiaoling', name: 'Memooow' },
  { id: 17420214, login: 'laolu87', name: 'laolu87' },
  { id: 20606749, login: 'wardenger', name: 'wardenger' },
  { id: 21374693, login: 'Cbinbin', name: 'Cbinbin' },
  { id: 21116712, login: 'cat6572325', name: 'cat6572325' }
]

export default class TeamInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '成员'
    }
  }

  setUserName(event){
    event.stopPropagation()
    let name = event.target.parentNode.getAttribute('href').replace('https://github.com/', '')

    // Object 格式 { a: 1, b: 2 }
    this.setState({ name: name })
  }

  userNameFallback(event){
    event.stopPropagation()

    // Object 格式 { a: 1, b: 2 }
    this.setState({ name: '成员' })
  }

  render() {
    return (
      <div className="team-info">
        <a href='https://github.com/newteo' target="_blank">
          <img src={`/assets/${require('../../images/logo.png')}`} />
        </a>
        <p className='members-title'>{this.state.name}</p>
        <div className='members' onMouseLeave={this.userNameFallback.bind(this)}>
        {
          users.map((user, index)=>{
            return(
              <a key={index} href={`https://github.com/${user.login}`} target="_blank">
                <img key={index} src={`${GITHUB_USER_CONTENT_AVATARS_URL}/u/${user.id}`} data-info='dd' onMouseEnter={this.setUserName.bind(this)}
                  />
              </a>
            )
          })
        }
        </div>
      </div>
    )
  }
}
