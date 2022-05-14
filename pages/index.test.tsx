import { render, screen } from '@testing-library/react';

import HomePage from './index';

import '@testing-library/jest-dom';

test('renders homepage', () => {
  render(<HomePage />);
  const homePageText = screen.getByText(/home page/i);
  expect(homePageText).toBeInTheDocument();
});
