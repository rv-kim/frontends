import * as React from 'react'
import { shallow } from 'enzyme'
import * as Renderer from 'react-test-renderer'
import Sample from './sample'

describe('Sample Component', () => {

  test('snapshot', () => {
    const ss = Renderer.create(<Sample text="test" color="black" />).toJSON()
    expect(ss).toMatchSnapshot()
  })

  test('スナップショット０２', () => {
    const ss = Renderer.create(<Sample text="examples" color="green" />).toJSON()
    expect(ss).toMatchSnapshot()
  })

  test('H1 should be "Hello, World."', () => {
    const sample = shallow(<Sample />)
    expect(sample.find('h1').text()).toBe('Hello World.')
  })

  test('H2 should be "test..."', () => {
    const sample = shallow(<Sample />)
    expect(sample.find('h2').text()).toBe('test...')
  })

  test('H3 should be text property', () => {
    const txt = 'halo, halo'
    const sample = shallow(<Sample text={txt} />)
    expect(sample.find('h3').text()).toBe(txt)
  })

})
