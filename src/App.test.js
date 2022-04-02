import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Home page', () => {
  render(<App />);
  const divElement = screen.getByText(/Hello From the budget/i);
  expect(divElement).toBeInTheDocument();
});
