'use client';

import { ThemeProvider } from 'flowbite-react/theme';
import { customTheme } from './theme';

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider theme={customTheme}>
            {children}
        </ThemeProvider>
    );
}
