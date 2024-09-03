import React from 'react';
import { render, screen } from '@testing-library/react';
import Display from '../../components/Display';

test('Display shows correct input', () => {
  render(<Display value="123" expandDisplay={false} />);
  const displayValue = screen.getByText(/123/i);
  expect(displayValue).toBeInTheDocument();
});

test('Display expands to show input record', () => {
  render(<Display value="123" expandDisplay={true} inputRecord="1+2" />);
  const inputRecord = screen.getByText(/1\+2/i);
  expect(inputRecord).toBeInTheDocument();
});
