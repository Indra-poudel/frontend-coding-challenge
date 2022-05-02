import { render, screen } from '@testing-library/react';
import Button from '../Button';

test('renders Button with label Click Me', () => {
    render(<Button title='Click Me' />);
    const label = screen.getByText(/Click Me/i);
    expect(label).toBeInTheDocument();
});

test('renders Button with className primary-button', () => {
    render(<Button title='Click Me'  />);
    const className = screen.getByRole('button');
    expect(className).toHaveClass('contained');
});

test('renders Button with className secondary-button', () => {
    render(<Button title='Click Me' type='text' />);
    const className = screen.getByRole('button');
    expect(className).toHaveClass('text');
});
