import React from 'react';
import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

test('Form fields have correct attributes', () => {
  render(<BookingForm />);

  expect(screen.getByLabelText('Choose date')).toHaveAttribute('type', 'date');
  expect(screen.getByLabelText('Choose date')).toHaveAttribute('required');

  expect(screen.getByLabelText('Choose time')).toHaveAttribute('required');

  expect(screen.getByLabelText('Number of guests')).toHaveAttribute('type', 'number');
  expect(screen.getByLabelText('Number of guests')).toHaveAttribute('required');

  expect(screen.getByLabelText('Occasion')).toHaveAttribute('required');
});
