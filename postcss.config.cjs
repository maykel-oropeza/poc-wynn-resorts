module.exports = {
    plugins: {
        'postcss-preset-mantine': {},
        'postcss-simple-vars': {
            variables: {
                'mantine-breakpoint-xxs': '30em',
                'mantine-breakpoint-xs': '36em',
                'mantine-breakpoint-sm': '48em',
                'mantine-breakpoint-md': '64em',
                'mantine-breakpoint-lg': '74em',
                'mantine-breakpoint-xl': '89em',
                'mantine-breakpoint-xl2': '100em',
                'mantine-breakpoint-xl3': '110em',
            },
        },
    },
};