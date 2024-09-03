import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../../components/Button';

test('Button renders with label', () => {
  render(<Button label="1" />);
  const buttonElement = screen.getByText(/1/i);
  expect(buttonElement).toBeInTheDocument();
});

test('Button triggers onClick function', () => {
  const handleClick = jest.fn();
  render(<Button label="1" onClick={handleClick} />);
  const buttonElement = screen.getByText(/1/i);
  fireEvent.click(buttonElement);
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test('Button has correct class for equals button', () => {
  render(<Button label="=" className="equals" />);
  const buttonElement = screen.getByText(/=/i);
  expect(buttonElement).toHaveClass('equals');
});
