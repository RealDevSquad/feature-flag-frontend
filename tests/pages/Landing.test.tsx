import { render, screen } from '@testing-library/react';
import Landing from '../../src/pages/Landing';
import { describe, it, expect } from 'vitest';

describe('Landing Page', () => {
  it('renders main sections and content', () => {
    render(<Landing />);

    expect(screen.getByTestId('hero-section')).toBeInTheDocument();
    expect(screen.getByTestId('hero-title')).toHaveTextContent(
      'Welcome to Feature-Flag',
    );
    expect(screen.getByAltText('RDS Logo')).toBeInTheDocument();

    expect(screen.getByTestId('what-is-section')).toBeInTheDocument();
    expect(screen.getByTestId('why-use-section')).toBeInTheDocument();

    expect(screen.getByTestId('features-section')).toBeInTheDocument();
    expect(screen.getByTestId('features-grid')).toBeInTheDocument();

    expect(screen.getByTestId('footer')).toBeInTheDocument();
    expect(screen.getByTestId('repo-link')).toHaveAttribute(
      'href',
      'https://github.com/Real-Dev-Squad/feature-flag-frontend',
    );
  });

  it('renders all feature cards', () => {
    render(<Landing />);
    const featureCards = screen.getAllByTestId(/^feature-card-/);
    expect(featureCards).toHaveLength(4);
  });

  it('has proper accessibility attributes', () => {
    render(<Landing />);
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(
      screen.getByLabelText('Created by Real Dev Squad'),
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText('Benefits of using feature flags'),
    ).toBeInTheDocument();
  });
});
