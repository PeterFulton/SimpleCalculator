import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Slider from '../../components/Slider';

test('Slider toggles state when clicked', () => {
  const handleToggle = jest.fn();
  render(<Slider isChecked={false} action={handleToggle} label="Toggle" />);
  const checkbox = screen.getByRole('checkbox');
  fireEvent.click(checkbox);
  expect(handleToggle).toHaveBeenCalledTimes(1);
});

test('Slider shows correct label', () => {
  render(<Slider isChecked={false} action={() => {}} label="Display input record" />);
  const labelElement = screen.getByText(/Display input record/i);
  expect(labelElement).toBeInTheDocument();
});

test('handles rapid toggling', () => {
    const handleToggle = jest.fn();
    render(<Slider isChecked={false} action={handleToggle} label="Test Label" />);
    fireEvent.click(screen.getByRole('checkbox'));
    fireEvent.click(screen.getByRole('checkbox'));
    fireEvent.click(screen.getByRole('checkbox'));
    expect(handleToggle).toHaveBeenCalledTimes(3);
});