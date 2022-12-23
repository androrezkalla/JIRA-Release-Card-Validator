import { render, screen } from '@testing-library/react';
import App from './App';

test("welcome text", () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to Teladoc's Wintership 2023!/i);
  expect(linkElement).toBeInTheDocument();
});

test("add code text deleted", () => {
  render(<App />);
  const linkElement = screen.getByText(/Add your code here/i);
  expect(linkElement).not.toBeInTheDocument();
});
