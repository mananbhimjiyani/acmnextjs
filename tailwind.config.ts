// tailwind.config.js

import type {Config} from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'gradient':
                    'linear-gradient(138deg, rgba(255, 255, 255, 0.50) 0%, rgba(255, 255, 255, 0.20) 99.36%)',
                'gradient2':
                    'linear-gradient(314deg, #08143E 0%, #2E4260 75%, #16154D 100%)',
                'gradientFooter':
                    'linear-gradient(116deg, rgba(25, 36, 73, 0.70) 0%, #000 100%)',
            },
            colors: {
                'bg-rgba': 'rgba(36, 49, 91, 0.60)',
                'gallery': '#0F1731',
                'contactus': '#007AFE',
            },
        },
    },
    plugins: [],
};

export default config;
