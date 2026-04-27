import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

export default {
  content: ['./app/**/*.{ts,tsx}', './content/**/*.mdx', './public/**/*.svg'],
  theme: {
    extend: {
      colors: {
        ink: 'var(--ink)',
        'ink-light': 'var(--ink-light)',
        'ink-faint': 'var(--ink-faint)',
        paper: 'var(--paper)',
        'paper-dark': 'var(--paper-dark)',
        rule: 'var(--rule)',
        'rule-heavy': 'var(--rule-heavy)',
        accent: 'var(--accent)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        serif: ['var(--font-serif)', 'serif'],
        fell: ['var(--font-fell)', 'serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      borderColor: {
        DEFAULT: 'var(--rule)',
      },
      typography: {
        quoteless: {
          css: {
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:first-of-type::after': { content: 'none' },
          },
        },
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [typography],
} satisfies Config;
