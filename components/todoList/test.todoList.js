import React from 'react'
import { shallow } from 'enzyme'

import todoList from './todoList'

describe('todoList', () => {
  let component, props

  beforeEach(() => {
    props = {}
    component = shallow(<todoList {...props} />)
  })

  it('should', () => {
    expect(component).toMatchSnapshot()
  })
})