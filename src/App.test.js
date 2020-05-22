import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  const { getByTestId } = render(<App />)
  const nameElement = getByTestId('name')
  const birthdayElement = getByTestId('birthday')
  expect(nameElement).not.toBeNull()
  expect(birthdayElement).not.toBeNull()
})
