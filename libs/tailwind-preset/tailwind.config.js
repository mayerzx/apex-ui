const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        ring: 'hsl(var(--ring))',
        input: 'hsl(var(--input))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        indeterminate: {
          '0%': {
            transform: 'translateX(-100%) scaleX(0.5)',
          },
          '100%': {
            transform: 'translateX(100%) scaleX(0.5)',
          },
        },
      },
      animation: {
        indeterminate: 'indeterminate 4s infinite ease-in-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
