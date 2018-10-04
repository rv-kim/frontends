import * as React from 'react'
import { shallow } from 'enzyme'
import * as ShallowRenderer from 'react-test-renderer/shallow'
// import configureStore from 'redux-mock-store'
import { Test } from './test'

const renderer = new ShallowRenderer();
// const mockStore = configureStore()

describe('Test Component', () => {

  test('snapshots_01', () => {
    const ss = renderer.render(<Test />);
    expect(ss).toMatchSnapshot()
  })

  test('test 01', () => {
    // const store = mockStore({count: 0})
    // const test = shallow(<Test store={store} />)
    const test = shallow(<Test />)
    expect(test).toEqual(test)
  })
})
