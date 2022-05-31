import { render, screen, fireEvent } from '@/../jest/testUtils';
import Button from '.';

const mockOnClick = jest.fn();

describe('components - Button', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render a button', async () => {
    render(<Button text="Follow" onClick={mockOnClick} />);
    
    fireEvent.click(screen.getByText('Follow'))

    expect(screen.getByRole('button')).not.toBeDisabled();
    expect(mockOnClick).toHaveBeenCalled();
  });

  it('should render a disabled button', async () => {
    render(
      <Button text="Follow" disabled onClick={mockOnClick} />
    );
    
    fireEvent.click(screen.getByText('Follow'))

    expect(screen.getByRole('button')).toBeDisabled();
    expect(mockOnClick).not.toHaveBeenCalled();
  });
});
