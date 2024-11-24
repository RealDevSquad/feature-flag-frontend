import { render, screen } from '@testing-library/react';
import Landing from '../../src/pages/Landing';
import { describe, it, expect } from 'vitest';

// Mock framer-motion to avoid animation-related issues in tests
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    section: ({ children, ...props }: any) => <section {...props}>{children}</section>,
    footer: ({ children, ...props }: any) => <footer {...props}>{children}</footer>,
  },
}));

describe('Landing Page', () => {
  it('renders the main sections', () => {
    render(<Landing />);
    
    expect(screen.getByText('Welcome to Feature-Flag')).toBeInTheDocument();
    expect(screen.getAllByText())
    expect(screen.getByAltText('RDS Logo')).toBeInTheDocument();

    expect(screen.getByText('What are Feature Flags?')).toBeInTheDocument();
    expect(screen.getByText('Why Use Feature Flags?')).toBeInTheDocument();
    
    expect(screen.getByText('Key Features')).toBeInTheDocument();
    expect(screen.getByText('Progressive Rollouts')).toBeInTheDocument();
    expect(screen.getByText('A/B Testing')).toBeInTheDocument();
    
    expect(screen.getByText(/open sourced/i)).toBeInTheDocument();
    expect(screen.getByText('repo')).toHaveAttribute('href', 'https://github.com/Real-Dev-Squad/feature-flag-frontend');
  });

  it('has proper accessibility attributes', () => {
    render(<Landing />);
    
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
}); 