'use client';

import { ThemeProvider } from 'next-themes';
import { PropsWithChildren } from 'react';
import { AuthContextProvider } from '../contexts/auth-context';

export function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider enableSystem={true}>
      <AuthContextProvider>{children}</AuthContextProvider>
    </ThemeProvider>
  );
}
