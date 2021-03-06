import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import {App} from './App.js'

test('it renders without crashing', () => {
  const { getByTestId } = render(<App />)
  expect(getByTestId('rootElement')).toBeInTheDocument()
})