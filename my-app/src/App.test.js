import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
	render(<App />);
	const linkElement = screen.getByTestId('learn-link');
	expect(linkElement).toBeInTheDocument();
});

test('link correctness', () => {
	render(<App />);
	const linkElement = screen.getByTestId('learn-link');
	expect(linkElement.href).toContain('ikemnomso.netlify.app');
});
