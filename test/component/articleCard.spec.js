//test not done
import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import ArticleCard from '../../components/ArticleCard'

function setup(propOverrides) {

  const props = Object.assign({
  	id: '123',
  	title: 'this is article title',
  	username: 'author',
  	url:'cover url',
  	describe: 'some text'    
  }, propOverrides)

  const renderer = TestUtils.createRenderer()

  renderer.render(
    <ArticleCard {...props} />
  )

  const output = renderer.getRenderOutput()

  return {
    props: props,
    output: output,
    renderer: renderer
  }
}

describe.skip('ArticleCard component', () => {
	it('should render correctly', () => {
    const { output } = setup()
    expect(output.props.className).toEqual('article-card')

    const Link = output.props.children
    expect(Link.props.to).toEqual('/posts/123')

    const Card = Link.props.children
    const CardTitle = Card.props.children[0]
    const CardMedia = Card.props.children[1]
    const CardText  = Card.props.children[2]

    expect(CardTitle.props.title).toEqual('this is article title')
    expect(CardTitle.props.subtitle).toEqual('author')

    expect(CardMedia.props.children.props.src).toEqual('cover url')
    expect(CardText.props.children).toEqual('some text')

  })  
})
