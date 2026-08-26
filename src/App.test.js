import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'

test('presents the core experience and selected products', () => {
  render(<App />)
  expect(screen.getByRole('heading', { name: /I build systems that move people forward/i })).toBeInTheDocument()
  expect(screen.getByText('20+')).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: 'Project Pluto' })).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: 'Project Gold' })).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: 'Project Fenrir' })).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: 'Master Anything' })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: /Visit Master Anything/i })).toHaveAttribute('href', 'https://masteranything.app')
  expect(screen.getByRole('heading', { name: 'Wholeflo' })).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: 'Quikaar' })).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: 'PennyTots' })).toBeInTheDocument()
})
