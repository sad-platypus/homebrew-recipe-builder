'use client';

import { ThemeProvider } from 'next-themes';
import { PropsWithChildren } from 'react';

export function Providers({ children }: PropsWithChildren) {
  return <ThemeProvider enableSystem={true}>{children}</ThemeProvider>;
}
