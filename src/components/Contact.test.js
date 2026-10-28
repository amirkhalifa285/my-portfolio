import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './styles/Theme';
import Contact from './Contact';

const ENDPOINT = 'https://dddj5rowmf.execute-api.eu-west-1.amazonaws.com/prod/contact';

const renderContact = () =>
  render(
    <ThemeProvider theme={lightTheme}>
      <Contact />
    </ThemeProvider>
  );

const fill = () => {
  fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Jane' } });
  fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'jane@example.com' } });
  fireEvent.change(screen.getByLabelText('Subject'), { target: { value: 'Hello' } });
  fireEvent.change(screen.getByLabelText('Message'), { target: { value: 'This is a test message.' } });
};

afterEach(() => {
  delete global.fetch;
});

test('shows validation errors and does not submit an empty form', () => {
  global.fetch = jest.fn();
  renderContact();
  fireEvent.click(screen.getByRole('button', { name: /send message/i }));
  expect(screen.getByText('Name is required')).toBeInTheDocument();
  expect(screen.getByText('Message is required')).toBeInTheDocument();
  expect(global.fetch).not.toHaveBeenCalled();
});

test('posts the form to the API Gateway endpoint and shows success', async () => {
  global.fetch = jest.fn().mockResolvedValue({ ok: true, json: async () => ({}) });
  renderContact();
  fill();
  fireEvent.click(screen.getByRole('button', { name: /send message/i }));

  await waitFor(() => expect(screen.getByRole('status')).toHaveTextContent(/thank you/i));
  expect(global.fetch).toHaveBeenCalledWith(ENDPOINT, expect.objectContaining({
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'Jane',
      email: 'jane@example.com',
      subject: 'Hello',
      message: 'This is a test message.',
    }),
  }));
});

test('shows the API error message on failure', async () => {
  global.fetch = jest.fn().mockResolvedValue({ ok: false, json: async () => ({ error: 'Rate limited' }) });
  renderContact();
  fill();
  fireEvent.click(screen.getByRole('button', { name: /send message/i }));
  await waitFor(() => expect(screen.getByRole('alert')).toHaveTextContent('Rate limited'));
});
