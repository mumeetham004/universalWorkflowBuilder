import { render, screen } from '@testing-library/react';
import App from './App';

test('renders task panel heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Task Details/i);
  expect(headingElement).toBeInTheDocument();
});
