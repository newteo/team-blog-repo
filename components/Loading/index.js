import React, { Component } from 'react'
var css = require('./style.styl')

export default class Loading extends Component {
	render() {		 
		return(
			<div className='loading'>
		     <img src='../../images/Loading.gif' />
		     <h1><i>加载中...</i></h1>
		   </div>
		)
	}
}
