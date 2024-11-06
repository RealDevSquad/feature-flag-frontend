import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('renders the app component', () => {
  render(<App />);
  expect(screen.getByText(/Real Dev Sqaud/i)).toBeInTheDocument();
});
