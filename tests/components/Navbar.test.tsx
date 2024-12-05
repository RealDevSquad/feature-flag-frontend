import { render, screen } from '@testing-library/react';
import Navbar from '../../src/components/navbar';
import { describe, it, expect, vi } from 'vitest';

vi.mock('../../src/config', () => ({
  getConfig: () => ({
    welcomeSiteUrl: 'https://welcome.example.com',
    membersSiteUrl: 'https://members.example.com',
    statusSiteUrl: 'https://status.example.com',
  }),
  validateEnv: () => {},
}));

describe('Navbar Component', () => {
  it('should render the navbar with correct links', () => {
    render(<Navbar />);

    expect(screen.getByLabelText(/Home/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Go to Welcome site/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Go to Members site/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Go to Status site/i)).toBeInTheDocument();
  });

  it('should have links opening in a new tab', () => {
    render(<Navbar />);

    expect(screen.getByTestId('navbar-home-link')).toBeInTheDocument();
    expect(screen.getByTestId('navbar-welcome-link')).toBeInTheDocument();
    expect(screen.getByTestId('navbar-members-link')).toBeInTheDocument();
    expect(screen.getByTestId('navbar-status-link')).toBeInTheDocument();
    expect(screen.getByTestId('navbar-signin-btn')).toBeInTheDocument();

    expect(screen.getByLabelText(/Go to Welcome site/i)).toHaveAttribute(
      'rel',
      'noopener noreferrer',
    );
    expect(screen.getByLabelText(/Go to Members site/i)).toHaveAttribute(
      'rel',
      'noopener noreferrer',
    );
    expect(screen.getByLabelText(/Go to Status site/i)).toHaveAttribute(
      'rel',
      'noopener noreferrer',
    );
  });
});
