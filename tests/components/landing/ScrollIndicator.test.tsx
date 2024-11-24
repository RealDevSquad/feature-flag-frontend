 import { render, fireEvent } from '@testing-library/react';
import { ScrollIndicator } from '../../../src/components/landing/ScrollIndicator';
import { describe, it, expect, vi } from 'vitest';

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, onClick, ...props }: any) => (
      <div onClick={onClick} {...props}>
        {children}
      </div>
    ),
  },
}));

describe('ScrollIndicator', () => {
  it('renders the scroll indicator', () => {
    const { container } = render(<ScrollIndicator />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('scrolls when clicked', () => {
    // Mock window.scrollTo
    const scrollToMock = vi.fn();
    window.scrollTo = scrollToMock;
    
    const { container } = render(<ScrollIndicator />);
    fireEvent.click(container.firstChild as Element);
    
    expect(scrollToMock).toHaveBeenCalledWith({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  });
});