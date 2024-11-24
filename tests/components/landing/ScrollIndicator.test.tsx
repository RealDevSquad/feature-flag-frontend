import { render, fireEvent } from '@testing-library/react';
import { ScrollIndicator } from '../../../src/components/landing/ScrollIndicator';
import { describe, it, expect, vi } from 'vitest';

describe('ScrollIndicator', () => {
  it('renders with correct attributes', () => {
    const { getByTestId } = render(<ScrollIndicator />);
    expect(getByTestId('scroll-indicator')).toBeInTheDocument();
    expect(getByTestId('scroll-arrow')).toBeInTheDocument();
  });

  it('scrolls when clicked', () => {
    const scrollToMock = vi.fn();
    window.scrollTo = scrollToMock;

    const { getByTestId } = render(<ScrollIndicator />);
    fireEvent.click(getByTestId('scroll-indicator'));

    expect(scrollToMock).toHaveBeenCalledWith({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  });
});
