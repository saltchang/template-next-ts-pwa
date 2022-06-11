import {render, screen} from '@testing-library/react';

import HomePage from '@/pages';

import '@testing-library/jest-dom';

test('renders homepage', () => {
  render(<HomePage />);
  const homePageText = screen.getByText(
    /a project template for next\.js pwa with typescript/i
  );
  expect(homePageText).toBeInTheDocument();
});
