import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Landing from './Landing';

describe('Landing', () => {
  it('renders the main heading', () => {
    render(<Landing />);
    const heading = screen.getByRole('heading', {
      name: /Hi! I'm Travis Allen/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it('renders the description', () => {
    render(<Landing />);
    const description = screen.getByText(
      /Staff Engineer specializing in distributed systems, high-throughput data pipelines, and infrastructure observability\./i
    );
    expect(description).toBeInTheDocument();
  });

  it('renders the button link', () => {
    render(<Landing />);
    const buttonLink = screen.getByRole('link', {
      name: /Check out my projects!/i,
    });
    expect(buttonLink).toBeInTheDocument();
  });

  it('renders the portrait', () => {
    render(<Landing />);
    const portrait = screen.getByAltText(/portrait/i);
    expect(portrait).toBeInTheDocument();
  });
});
