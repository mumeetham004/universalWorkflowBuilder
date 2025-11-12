import { render, screen } from '@testing-library/react';
import App from '../App';
import { describe, it, expect } from 'vitest';

describe('App', () => {
  it('renders task panel heading', () => {
    render(<App />);
    const headingElement = screen.getByText(/Task Details/i);
    expect(headingElement).toBeInTheDocument();
  });
});
