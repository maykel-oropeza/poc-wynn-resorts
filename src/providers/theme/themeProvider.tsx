'use client'

import { MantineProvider } from '@mantine/core';
import { ContainerTheme, MantineColorScheme, theme } from './theme';

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <MantineProvider theme={theme} defaultColorScheme={MantineColorScheme.Light}>
            <ContainerTheme>
                {children}
            </ContainerTheme>
        </MantineProvider >
    );
}
