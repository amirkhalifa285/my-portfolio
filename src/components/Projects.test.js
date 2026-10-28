import { render, screen, fireEvent, within } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from './styles/Theme';
import Projects from './Projects';

const renderProjects = () =>
  render(
    <ThemeProvider theme={darkTheme}>
      <Projects />
    </ThemeProvider>
  );

test('opens the detail modal with gallery navigation and closes on Escape', () => {
  renderProjects();
  fireEvent.click(screen.getAllByRole('button', { name: /details/i })[0]);

  const dialog = screen.getByRole('dialog', { name: /SafeRide details/i });
  expect(within(dialog).getByText('Highlights')).toBeInTheDocument();
  expect(within(dialog).getByText(/^1 \//)).toBeInTheDocument();

  fireEvent.keyDown(document, { key: 'ArrowRight' });
  expect(within(dialog).getByText(/^2 \//)).toBeInTheDocument();

  fireEvent.keyDown(document, { key: 'Escape' });
});

test('shows both repos for projects with a separate backend', () => {
  renderProjects();
  fireEvent.click(screen.getByRole('button', { name: /Netflix Clone/i }));
  const dialog = screen.getByRole('dialog');
  expect(within(dialog).getByRole('link', { name: /Frontend/i })).toBeInTheDocument();
  expect(within(dialog).getByRole('link', { name: /Backend/i })).toBeInTheDocument();
});

test('category filter narrows the archive', () => {
  renderProjects();
  fireEvent.click(screen.getByRole('button', { name: 'Security' }));
  expect(screen.getByRole('button', { name: /ARP & DNS Spoofing/i })).toBeInTheDocument();
  expect(screen.queryByRole('button', { name: /Netflix Clone/i })).not.toBeInTheDocument();
});
