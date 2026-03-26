import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
        // Core Brand Colors
        "brand-blue": "#0A2A4E",
        "viral-red": "#FF2D55", // Primary CTA & accent color (sharper than coral)
        "brand-coral": "#FF6F61", // Deprecated - use viral-red

        // Viral Pop Colors for Consumer Appeal
        "location-red": "#EF4444",
        "notification-orange": "#FB923C",
        "viral-purple": "#A855F7",

                // NEW: Deep Teal/Blue for Trust & Safety Mode
                safety: {
                    50: '#f0f9fa',
                    100: '#dcfce7',
                    500: '#0f766e', // Primary Brand
                    900: '#134e4a',
                },
                // NEW: Vibrant Coral/Orange for Travel & Energy Mode
                travel: {
                    50: '#fff7ed',
                    100: '#ffedd5',
                    500: '#f97316',
                    900: '#7c2d12',
                },
                // FIFA World Cup Colors
                "fifa-blue": "#0033A0",
                "fifa-gold": "#D4AF37",
                "fifa-red": "#E30613",
                "fifa-white": "#FFFFFF",
            },
            // Enhanced animations for consumer-first UI
            animation: {
                'blob': 'blob 7s infinite',
                'float': 'float 6s ease-in-out infinite',
                'draw-line': 'draw-line 2s ease-out forwards',
                'shimmer': 'shimmer 2s linear infinite',
                'scan': 'scan 1.5s ease-in-out forwards',
                'bounce-gentle': 'bounce-gentle 2s infinite',
            },
            keyframes: {
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                'draw-line': {
                    '0%': { strokeDashoffset: '1000' },
                    '100%': { strokeDashoffset: '0' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-1000px 0' },
                    '100%': { backgroundPosition: '1000px 0' },
                },
                scan: {
                    '0%': { transform: 'translateY(100%)' },
                    '50%': { transform: 'translateY(0%)' },
                    '100%': { transform: 'translateY(-100%)' },
                },
                'bounce-gentle': {
                    '0%, 100%': { transform: 'translateY(-5%)' },
                    '50%': { transform: 'translateY(0)' },
                },
            },
      // Glassmorphism utilities
      backdropBlur: {
        xs: "2px",
        DEFAULT: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
        "glass-lg": "0 12px 48px 0 rgba(31, 38, 135, 0.25)",
        glow: "0 0 20px rgba(255, 45, 85, 0.5)",
        "glow-blue": "0 0 20px rgba(10, 42, 78, 0.5)",
      },
        },
    },
    plugins: [],
};
export default config;