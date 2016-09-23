//test done
import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Topbar from '../../components/Topbar'

function setup() {
	const renderer = TestUtils.createRenderer()
  renderer.render(
    <Topbar />
  )

  const output = renderer.getRenderOutput()
  return {    
    output: output,
    renderer: renderer
  }
}

describe.skip('Topbar component', () => {
	it('should render correctly', () => {
		const { output } = setup()		
		expect(output.props.className).toEqual('Topbar')

		const Link  = output.props.children
		expect(Link.props.to).toEqual('/home')

		const img = Link.props.children
		expect(img.props.id).toEqual('logo')
	})
})