import React, { Component } from 'react'
var css = require('./style.styl')

export default class Banner extends Component {
	render() {
		return (
			<div className="Banner">
				<div className="text">
					<p>一群年轻人因为类似的想法而聚集到一起</p>
					<p>为实现共同的理想而不懈努力</p>
					<p>—— Newteo</p>
				</div>
			</div>
		)
	}
}

