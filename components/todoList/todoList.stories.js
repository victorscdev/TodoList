import React from 'react'
import { storiesOf } from '@storybook/react'

import todoList from './todoList'

storiesOf('todoList', module).add('Example 1', () =>
  <todoList />
)