import { render, screen } from '@testing-library/react';
import App from './../App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/My To-Do List App/i);
  expect(linkElement).toBeInTheDocument();
});
