import React,{ Component,PropTypes } from 'react'
import marked, { Renderer } from 'marked'

// 採用兩個空格，不用縮進
// Atom 編輯器可以自定義 \t
export default class MarkdownParse extends Component {
	constructor(props) {
    super(props)
    const renderer = new Renderer()
    marked.setOptions({
      renderer: renderer,
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false
    })
  }

  render() {
  	const { body } = this.props
  	return(
  		<div dangerouslySetInnerHTML={{__html: marked(body || '')}} />
  	)
  }
}

MarkdownParse.PropTypes = {
	body: PropTypes.string.isRquired
}
