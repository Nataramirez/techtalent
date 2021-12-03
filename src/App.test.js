import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText('Hola Pedro,');
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText('Ahorra hasta un 30% agregando un auto en tu viaje a Chicago');
  expect(linkElement).toBeInTheDocument();
});
