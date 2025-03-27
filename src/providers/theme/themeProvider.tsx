'use client'

import { MantineProvider } from '@mantine/core';
import { ContainerTheme, MantineColorScheme, theme } from './theme';
import { Notifications } from '@mantine/notifications';

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <MantineProvider theme={theme} defaultColorScheme={MantineColorScheme.Light}>
            <ContainerTheme>
                <Notifications />
                {children}
            </ContainerTheme>
        </MantineProvider >
    );
}
