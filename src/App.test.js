import { render, screen } from '@testing-library/react';
import App from './App';

test('newGoblin', () => {
  render(<App />);
  const linkElement = screen.getByText(/name/i);
  expect(linkElement).toBeInTheDocument();
});
