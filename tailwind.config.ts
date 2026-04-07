import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            animation: {
                'gradient-x': 'gradient-x 3s ease infinite',
                'shimmer': 'shimmer 2s infinite',
                'float': 'float 3s ease-in-out infinite',
                'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
                'sparkle': 'sparkle 2s ease-in-out infinite',
                'holographic': 'holographic 4s ease-in-out infinite',
            },
            keyframes: {
                'gradient-x': {
                    '0%, 100%': {
                        'background-position': '0% 50%',
                    },
                    '50%': {
                        'background-position': '100% 50%',
                    },
                },
                shimmer: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(100%)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                'pulse-glow': {
                    '0%, 100%': {
                        opacity: '0.5',
                        boxShadow: '0 0 20px rgba(168, 85, 247, 0.4)',
                    },
                    '50%': {
                        opacity: '1',
                        boxShadow: '0 0 40px rgba(168, 85, 247, 0.8)',
                    },
                },
                sparkle: {
                    '0%, 100%': {
                        opacity: '0',
                        transform: 'scale(0) rotate(0deg)',
                    },
                    '50%': {
                        opacity: '1',
                        transform: 'scale(1) rotate(180deg)',
                    },
                },
                holographic: {
                    '0%': {
                        'background-position': '0% 50%',
                        filter: 'hue-rotate(0deg)',
                    },
                    '50%': {
                        'background-position': '100% 50%',
                        filter: 'hue-rotate(30deg)',
                    },
                    '100%': {
                        'background-position': '0% 50%',
                        filter: 'hue-rotate(0deg)',
                    },
                },
            },
        },
    },
    plugins: [],
};

export default config;
