import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders rounded', () => {
  render(<App />);
  const linkElement = screen.getByText('Rounded');
  expect(linkElement).toBeInTheDocument();
});
