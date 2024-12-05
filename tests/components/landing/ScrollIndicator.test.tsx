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
    const scrollIntoViewMock = vi.fn();

    const mockElement = document.createElement('div');
    mockElement.id = 'what-is-section';
    mockElement.scrollIntoView = scrollIntoViewMock;
    document.body.appendChild(mockElement);

    const { getByTestId } = render(<ScrollIndicator />);
    fireEvent.click(getByTestId('scroll-indicator'));
    expect(scrollIntoViewMock).toHaveBeenCalledWith({
      behavior: 'smooth',
      block: 'start',
    });
    document.body.removeChild(mockElement);
  });

  it('handles missing scroll target element gracefully', () => {
    const scrollIntoViewMock = vi.fn();
    const getElementByIdSpy = vi
      .spyOn(document, 'getElementById')
      .mockReturnValue(null);

    const { getByTestId } = render(<ScrollIndicator />);
    fireEvent.click(getByTestId('scroll-indicator'));
    expect(scrollIntoViewMock).not.toHaveBeenCalled();

    getElementByIdSpy.mockRestore();
  });
});
