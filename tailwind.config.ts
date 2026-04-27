import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0A',
        'background-dark': '#05040F',
        glass: {
          DEFAULT: 'rgba(26, 26, 46, 0.65)',
          dark: 'rgba(10, 10, 10, 0.75)',
          light: 'rgba(255, 255, 255, 0.05)',
        },
        neon: {
          purple: '#A855F7',
          pink: '#FF2E9A',
          cyan: '#00F0FF',
          purpleDark: '#7C3AED',
          pinkDark: '#E91E8C',
          cyanDark: '#00C4CC',
        },
        foreground: {
          DEFAULT: '#FFFFFF',
          secondary: '#A1A1AA',
          muted: '#71717A',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #A855F7 0%, #FF2E9A 50%, #00F0FF 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(255, 46, 154, 0.1) 50%, rgba(0, 240, 255, 0.1) 100%)',
      },
      boxShadow: {
        'neon-purple': '0 0 20px rgba(168, 85, 247, 0.5), 0 0 40px rgba(168, 85, 247, 0.3), 0 0 60px rgba(168, 85, 247, 0.1)',
        'neon-pink': '0 0 20px rgba(255, 46, 154, 0.5), 0 0 40px rgba(255, 46, 154, 0.3), 0 0 60px rgba(255, 46, 154, 0.1)',
        'neon-cyan': '0 0 20px rgba(0, 240, 255, 0.5), 0 0 40px rgba(0, 240, 255, 0.3), 0 0 60px rgba(0, 240, 255, 0.1)',
        'neon-mixed': '0 0 30px rgba(168, 85, 247, 0.4), 0 0 60px rgba(255, 46, 154, 0.2), 0 0 90px rgba(0, 240, 255, 0.1)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
        'glass-hover': '0 8px 32px rgba(168, 85, 247, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      },
      backdropBlur: {
        'glass': '20px',
        'glass-heavy': '40px',
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      borderRadius: {
        'glass': '16px',
      },
    },
  },
  plugins: [],
}

export default config
