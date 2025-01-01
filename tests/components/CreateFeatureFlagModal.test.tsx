import { render, screen, fireEvent } from '@testing-library/react';
import CreateFeatureFlagModal from '../../src/components/CreateFeatureFlagModal';

describe('CreateFeatureFlagModal', () => {
  const mockOnClose = vi.fn();
  const mockOnCreate = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders modal when open', () => {
    render(<CreateFeatureFlagModal isOpen={true} onClose={mockOnClose} onCreate={mockOnCreate} />);
    expect(screen.getByText('Create a Feature Flag')).toBeInTheDocument();
  });

  it('does not render modal when closed', () => {
    render(<CreateFeatureFlagModal isOpen={false} onClose={mockOnClose} onCreate={mockOnCreate} />);
    expect(screen.queryByText('Create a Feature Flag')).not.toBeInTheDocument();
  });

  it('calls onCreate with correct values when form is submitted', () => {
    render(<CreateFeatureFlagModal isOpen={true} onClose={mockOnClose} onCreate={mockOnCreate} />);
    
    fireEvent.change(screen.getByLabelText(/Name:/), { target: { value: 'Test Feature' } });
    fireEvent.change(screen.getByLabelText(/Description:/), { target: { value: 'Test Description' } });
    
    fireEvent.click(screen.getByText('Create'));
    
    expect(mockOnCreate).toHaveBeenCalledWith('Test Feature', 'Test Description');
  });

  it('calls onClose when cancel button is clicked', () => {
    render(<CreateFeatureFlagModal isOpen={true} onClose={mockOnClose} onCreate={mockOnCreate} />);
    
    fireEvent.click(screen.getByText('Cancel'));
    
    expect(mockOnClose).toHaveBeenCalled();
  });

  it('disables the Create button when fields are empty', () => {
    render(<CreateFeatureFlagModal isOpen={true} onClose={mockOnClose} onCreate={mockOnCreate} />);
    
    const createButton = screen.getByText('Create');
    expect(createButton).toBeDisabled();
  });

  it('enables the Create button when fields are filled', () => {
    render(<CreateFeatureFlagModal isOpen={true} onClose={mockOnClose} onCreate={mockOnCreate} />);
    
    fireEvent.change(screen.getByLabelText(/Name:/), { target: { value: 'Test Feature' } });
    fireEvent.change(screen.getByLabelText(/Description:/), { target: { value: 'Test Description' } });
    
    const createButton = screen.getByText('Create');
    expect(createButton).toBeEnabled();
  });
}); 