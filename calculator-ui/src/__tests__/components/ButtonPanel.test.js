import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ButtonPanel from '../../components/ButtonPanel';

test('ButtonPanel renders all buttons', () => {
  render(<ButtonPanel onButtonClick={() => {}} />);
  const buttons = screen.getAllByRole('button');
  expect(buttons.length).toBe(19);
});

test('ButtonPanel triggers correct button click', () => {
  const handleClick = jest.fn();
  render(<ButtonPanel onButtonClick={handleClick} />);
  const buttonElement = screen.getByText(/7/i);
  fireEvent.click(buttonElement);
  expect(handleClick).toHaveBeenCalledWith('7');
});
