import { render, screen } from '@testing-library/react';
import App from './App';

beforeAll(() => {
  window.matchMedia = window.matchMedia || (() => ({ matches: true, addListener() {}, removeListener() {} }));
  window.IntersectionObserver = window.IntersectionObserver || class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

test('renders the main sections', () => {
  render(<App />);
  expect(screen.getAllByText(/Amir Khalifa/i).length).toBeGreaterThan(0);
  ['about', 'experience', 'projects', 'skills', 'contact'].forEach((id) => {
    expect(document.getElementById(id)).toBeInTheDocument();
  });
});
