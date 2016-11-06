import React,{ Component } from 'react'

var css = require('./style.styl')
var css = require('./mobile-style.styl')

const members = {
    avatars: [
      { url: "https://avatars.githubusercontent.com/u/10026619", link:'https://github.com/joephon', name: 'joephon'},
      { url: "https://avatars.githubusercontent.com/u/4101720?v=3", link:'https://github.com/pennyjs', name: 'pennyjs'},
      { url: "https://avatars.githubusercontent.com/u/9959178?v=3", link:'https://github.com/Godlovekarl'},
      { url: "https://avatars.githubusercontent.com/u/17420214?v=3", link:'https://github.com/laolu87'},
      { url: 'https://avatars.githubusercontent.com/u/20606749?v=3', link:'https://github.com/wardenger'},
      { url: 'https://avatars.githubusercontent.com/u/17367714?v=3', link:'https://github.com/shenmiaoling'},
      { url: 'https://avatars.githubusercontent.com/u/21374693?v=3', link:'https://github.com/Cbinbin'}
  ]
}

export default class TeamInfo extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '成员'
    }
  }

  name(event){
    event.stopPropagation()
    let name = event.target.parentNode.getAttribute('href').replace('https://github.com/', '')
    this.setState({name:name})
  }

  members(event){
    event.stopPropagation()
    this.setState({name:'成员'})
  }

  render() {
    return (
      <div className="team-info">
        <a href='https://github.com/newteo' target="_blank">
          <img src='../images/logo.png' />
        </a>
        <p className='members-title'>{this.state.name}</p>
        <div className='members' onMouseLeave={this.members.bind(this)}>
        {
          members.avatars.map((avatar, index)=>{
            return(
              <a key={index} href={avatar.link} target="_blank">
                <img key={index} src={avatar.url} data-info='dd' onMouseEnter={this.name.bind(this)}
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
