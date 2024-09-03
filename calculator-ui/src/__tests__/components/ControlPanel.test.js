import React from 'react';
import { render, screen } from '@testing-library/react';
import ControlPanel from '../../components/ControlPanel';

test('ControlPanel renders children', () => {
  render(<ControlPanel><div>Test Child</div></ControlPanel>);
  const childElement = screen.getByText(/Test Child/i);
  expect(childElement).toBeInTheDocument();
});
