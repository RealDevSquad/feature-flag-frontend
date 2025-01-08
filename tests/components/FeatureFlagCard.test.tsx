import { render, screen, fireEvent } from '@testing-library/react';
import FeatureFlagCard from '../../src/components/FeatureFlagCard';
import { mockFeatureFlags } from '../mocks/mockData';
import { FeatureFlag } from '../../src/services/api';
import { describe, it, expect, vi } from 'vitest';

describe('FeatureFlagCard', () => {
  const mockOnCardClick = vi.fn();
  const mockFlag: FeatureFlag = mockFeatureFlags[0];

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders feature flags correctly', () => {
    render(<FeatureFlagCard flag={mockFlag} onCardClick={mockOnCardClick} />);

    expect(screen.getByText(mockFlag.name)).toBeInTheDocument();
    expect(screen.getByText(mockFlag.description)).toBeInTheDocument();
    expect(screen.getByText(mockFlag.status)).toBeInTheDocument();
    expect(screen.getByText(/Created:/)).toBeInTheDocument();
    expect(screen.getByText(/Updated:/)).toBeInTheDocument();
  });

  it('applies correct status styling', () => {
    render(<FeatureFlagCard flag={mockFlag} onCardClick={mockOnCardClick} />);

    const statusElement = screen.getByText(mockFlag.status);
    expect(statusElement).toHaveClass('bg-green-100', 'text-green-700');
  });

  it('calls onCardClick with correct flag id when clicked', () => {
    render(<FeatureFlagCard flag={mockFlag} onCardClick={mockOnCardClick} />);

    fireEvent.click(screen.getByText(mockFlag.name));
    expect(mockOnCardClick).toHaveBeenCalledWith(mockFlag.id);
  });
});
