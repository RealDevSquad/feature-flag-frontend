import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { http, HttpResponse } from 'msw';
import { server } from '../mocks/server';
import FeatureFlagList from '../../src/pages/FeatureFlagList';

vi.mock('../../src/config', () => ({
  getConfig: () => ({
    rdsBackendBaseUrl: 'http://localhost:8000',
  }),
}));

const mockNavigate = vi.fn();
vi.mock('react-router-dom', () => ({
  ...require('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('FeatureFlagList', () => {
  afterEach(() => {
    vi.clearAllMocks();
    server.resetHandlers();
  });

  const renderComponent = () => {
    render(
      <BrowserRouter>
        <FeatureFlagList />
      </BrowserRouter>,
    );
  };

  it('renders loading spinner initially', () => {
    renderComponent();
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });

  it('renders feature flags after loading', async () => {
    renderComponent();

    await waitFor(() => {
      expect(screen.queryByTestId('spinner')).not.toBeInTheDocument();
    });

    expect(screen.getByTestId('feature-flag-1')).toBeInTheDocument();
    expect(screen.getByTestId('feature-flag-2')).toBeInTheDocument();
  });

  it('displays error message when API call fails', async () => {
    server.use(
      http.get('http://localhost:8000/feature-flag/getAllFeatureFlags', () => {
        return HttpResponse.json(
          { message: 'Failed to fetch feature flags' },
          { status: 500 },
        );
      }),
    );

    renderComponent();

    await waitFor(() => {
      expect(
        screen.getByText(/Failed to fetch feature flags/),
      ).toBeInTheDocument();
    });
  });

  it('navigates to feature flag detail page when card is clicked', async () => {
    renderComponent();

    await waitFor(() => {
      expect(screen.getByTestId('feature-flag-1')).toBeInTheDocument();
    });

    const flagCard = screen.getByTestId('feature-flag-1');
    await userEvent.click(flagCard);

    expect(mockNavigate).toHaveBeenCalledWith('/featureFlag/1');
  });
});
