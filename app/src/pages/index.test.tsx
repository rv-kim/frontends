import * as React from 'react'
import { shallow } from 'enzyme'
import * as ShallowRenderer from 'react-test-renderer/shallow'
// import configureStore from 'redux-mock-store'
import { Index } from './index'

const renderer = new ShallowRenderer();
// const mockStore = configureStore()

describe('Index Component', () => {

  test('snapshots_01', () => {
    const ss = renderer.render(<Index />);
    expect(ss).toMatchSnapshot()
  })

  test('test 01', () => {
    // const store = mockStore({count: 0})
    // const index = shallow(<Index store={store} />)
    const index = shallow(<Index />)
    expect(index).toEqual(index)
  })
})
