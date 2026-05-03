/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "hsl(var(--color-primary) / <alpha-value>)",
                "primary-light":
                    "hsl(var(--color-primary-light) / <alpha-value>)",
                accent: "hsl(var(--color-accent) / <alpha-value>)",
                error: "hsl(var(--color-error) / <alpha-value>)",
                success: "hsl(var(--color-success) / <alpha-value>)",
                background: "hsl(var(--color-bg) / <alpha-value>)",
                "background-light":
                    "hsl(var(--color-bg-light) / <alpha-value>)",
                "background-dark": "hsl(var(--color-bg-dark) / <alpha-value>)",
                text: "hsl(var(--color-text) / <alpha-value>)",
                "text-muted": "hsl(var(--color-text-muted) / <alpha-value>)",
            },
            boxShadow: {
                glow: "0 2px 10px hsl(var(--color-primary)/0.5)",
                "glow-hover": "0 0 10px 2px hsl(var(--color-primary)/0.2)",
                "depth": "inset 0 1px 2px hsl(0 0% 100% / 0.1), 0 2px 4px hsl(0 0% 0% / 0.4), 0 8px 16px hsl(0 0% 0% / 0.2)",
                "depth-hover": "inset 0 1px 2px hsl(0 0% 100% / 0.15), 0 4px 10px hsl(0 0% 0% / 0.5), 0 4px 20px hsl(var(--color-primary)/ 0.3)",
                input: "inset 0 2px 4px hsl(0 0% 0% / 0.5), inset 0 -1px 1px hsl(0 0% 100% / 0.05)",
                "input-focus": "inset 0 2px 4px hsl(0 0% 0% /0.5), 0 0 8px hsl(var(--color-primary)/0.1)",
            },
            keyframes: {
                fadeUp: {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
            },
            animation: {
                "fade-up": "fadeUp 0.8s ease forwards",
            },
        },
    },
    plugins: [],
};
