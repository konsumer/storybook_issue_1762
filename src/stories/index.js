import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import Docs from './Docs'

storiesOf('Docs', module)
  .add('withInfo', withInfo('Heading here')(() => (<Docs name='David' />)))
  .addWithInfo('addWithInfo', 'Heading here', () => (<Docs name='David' />))
