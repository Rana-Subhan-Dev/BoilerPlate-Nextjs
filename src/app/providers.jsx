'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

import App from '../App';
import { ThemeChooserProvider } from '../contexts/theme-chooser';
import StyledComponentsRegistry from '../lib/styled-registry';

export function Providers({ children }) {
  // Create a client
  const [queryClient] = useState(() => new QueryClient());

  return (
    <StyledComponentsRegistry>
      <QueryClientProvider client={queryClient}>
        <ThemeChooserProvider>
          <App>{children}</App>
        </ThemeChooserProvider>
      </QueryClientProvider>
    </StyledComponentsRegistry>
  );
}
