module.exports = {
  content: [
    './src/pages/**/*.tsx',
    './src/pages/**/*.jsx',
    './src/components/**/*.tsx',
    './src/components/**/*.jsx',
    './src/layouts/**/*.tsx',
    './src/layouts/**/*.jsx',
  ],
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Arial', 'sans'],
      },
    },
  },
}
