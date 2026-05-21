import { render, screen } from '@testing-library/react';
import App from '../App';
import { describe, it, expect } from 'vitest';

describe('App', () => {
  it('renders brand name Dairia', () => {
    render(<App />);
    const brandElements = screen.getAllByText(/Dairia/i);
    expect(brandElements.length).toBeGreaterThan(0);
  });

  it('renders Shop Now button', () => {
    render(<App />);
    const buttonElement = screen.getByText(/Shop Now/i);
    expect(buttonElement).toBeInTheDocument();
  });
});
