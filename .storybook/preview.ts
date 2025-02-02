import type { Preview } from '@storybook/react';

const preview: Preview = {
    parameters: {
        backgrounds: {
            default: 'white',
            values: [
                {
                    name: 'white',
                    value: '#fff',
                },
                {
                    name: 'dark',
                    value: '#16171d',
                },
            ],
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;
