import { render, screen } from '@testing-library/react';
import App from '../src/App';
import { describe, it, expect } from 'vitest';

describe('App Component', () => {
  it('renders the app component', () => {
    render(<App />);

    //check if navbar exists
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
  });
});
