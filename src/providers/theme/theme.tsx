import { Box, Button, colorsTuple, createTheme, rem, useMantineColorScheme, virtualColor } from "@mantine/core";
import { useHotkeys } from "@mantine/hooks";
import classes from './button.module.css';

const mainColor = '#006F62';

export const theme = createTheme({
    breakpoints: {
        xxs: '20em', // 320px
        xs: '30em', // 480px
        sm: '48em', // 768px
        md: '64em', // 1024px
        lg: '74em', // 1184px
        xl: '89em', // 1424px
        xl2: '100em', // 1600px
        xl3: '110em', // 1760px
    },
    fontFamily: "avanirLTStdFont",
    headings: {
        fontFamily: "bigCaslonFont",
        fontWeight: "500",
        textWrap: "wrap",
        sizes: {
            h1: {
                fontSize: rem(37),
                fontWeight: "500",
                lineHeight: "1.48",
            },
            h2: {
                fontSize: rem(24),
                fontWeight: "500",
                lineHeight: "1.75",
            },
            h3: {
                fontSize: rem(22),
                fontWeight: "500",
                lineHeight: "1.5",
            },
            h4: {
                fontSize: rem(21),
                fontWeight: "500",
                lineHeight: "1.48",
            },
            h5: {
                fontSize: rem(18),
                fontWeight: "500",
                lineHeight: "1",
            },
            h6: {
                fontSize: rem(16),
                fontWeight: "500",
                lineHeight: "1",
            }
        }
    },
    primaryColor: 'main',
    colors: {
        main: colorsTuple(mainColor),
        surfaceLight1: colorsTuple('#ffffff'),
        surfaceLight2: colorsTuple('#f7f7f7'),
        surfaceLight3: colorsTuple('#f1f3f5'),
        surfaceDark1: colorsTuple('#000000'),
        surfaceDark2: colorsTuple('#1e1e1e'),
        surfaceDark3: colorsTuple('#353535'),
        bgPrimary: virtualColor({
            name: 'bgPrimary',
            dark: "surfaceDark2",
            light: "surfaceLight2",
        }),
        bgSecondary: virtualColor({
            name: 'bgSecondary',
            dark: 'surfaceDark1',
            light: 'surfaceLight1',
        }),
    },

    cursorType: 'pointer',
    fontSizes: {
        xs: rem(11),
        xs2: rem(12),
        sm: rem(14),
        md: rem(15.5),
        lg: rem(16),
        xl: rem(21),
        xl2: rem(24),
        xl3: rem(37)
    },
    components: {
        Button: Button.extend({
            classNames: classes,
            vars: (_, props) => {
                if (props.size === '3xl') {
                    return {
                        root: {
                            '--button-height': rem(48),
                        },
                    };
                }

                if (props.size === '4xl') {
                    return {
                        root: {
                            '--button-height': rem(56),
                        },
                    };
                }

                return { root: {} };
            },
        }),
    },
});

export const ContainerTheme = ({ children }: { children: React.ReactNode }) => {
    const { toggleColorScheme } = useMantineColorScheme();

    useHotkeys([
        ['ctrl+t', () => toggleColorScheme()]
    ]);

    return <Box bg="bgPrimary">{children}</Box>
}

export enum MantineColorScheme {
    Light = 'light',
    Dark = 'dark',
    Auto = 'auto'
}