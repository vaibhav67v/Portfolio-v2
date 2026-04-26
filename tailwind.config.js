/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "hsl(var(--color-primary) / <alpha-value>)",
                secondary: "hsl(var(--color-secondary) / <alpha-value>)",
                background: "hsl(var(--color-bg) / <alpha-value>)",
                "background-light": "hsl(var(--color-bg-light) / <alpha-value>)",
                "background-dark": "hsl(var(--color-bg-dark) / <alpha-value>)",
                text: "hsl(var(--color-text) / <alpha-value>)",
                "text-muted": "hsl(var(--color-text-muted) / <alpha-value>)",
            },
            boxShadow: {
                glow: "0 0 24px 4px hsl(var(--color-primary)/0.6)",
                "glow-hover": "0 0 24px 6px hsl(var(--color-primary)/0.8)",
            },
        },
    },
    plugins: [],
};
