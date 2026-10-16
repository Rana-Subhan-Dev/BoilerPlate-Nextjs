import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from '../../App';
import { ThemeChooserProvider } from '../../contexts/theme-chooser';
import { Home } from '../../views/home';

export const queryClient = new QueryClient();

describe('App', () => {
  it('renders headline', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <ThemeChooserProvider>
          <App>
            <Home />
          </App>
        </ThemeChooserProvider>
      </QueryClientProvider>,
    );

    expect(screen.getByText('option 1')).toBeInTheDocument();
  });
});
