//test done
import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Banner from '../../components/Banner'

function setup() {
	const renderer = TestUtils.createRenderer()
  renderer.render(
    <Banner />
  )

  const output = renderer.getRenderOutput()
  return {    
    output: output,
    renderer: renderer
  }
}

describe.skip('Banner component', () => {
	it('should render correctly', () => {
		const { output } = setup()		
		expect(output.props.className).toEqual('Banner')
		expect(output.props.children.props.className).toEqual('text')
	})
})