/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: '#1e1e2e',
        sidebar: '#181825',
        panel: '#11111b',
        elevated: '#24273a',
        line: '#313244',
        ink: '#cdd6f4',
        muted: '#6c7086',
        blue: '#89b4fa',
        green: '#a6e3a1',
        peach: '#fab387',
        mauve: '#cba6f7',
        red: '#f38ba8',
        yellow: '#f9e2af',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', 'ui-monospace', 'monospace'],
      },
      keyframes: {
        blink: { '0%, 49%': { opacity: 1 }, '50%, 100%': { opacity: 0 } },
        typein: { from: { width: '0' }, to: { width: '100%' } },
      },
      animation: {
        blink: 'blink 1s step-start infinite',
      },
    },
  },
  plugins: [],
}
