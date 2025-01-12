import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithRouter } from './utils';
import App from '../App';

describe('App', () => {
  it('renders without crashing', () => {
    renderWithRouter(<App />);
    expect(screen.getByText('NAVADA')).toBeInTheDocument();
  });

  it('contains all main navigation routes', () => {
    renderWithRouter(<App />);
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Instructions')).toBeInTheDocument();
    expect(screen.getByText('Design System')).toBeInTheDocument();
    expect(screen.getByText('Process')).toBeInTheDocument();
  });
});