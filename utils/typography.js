import Typography from 'typography';
import theme from 'typography-theme-sutro';
import CodePlugin from 'typography-plugin-code';
import gray from 'gray-percentage';

theme.plugins = [new CodePlugin()];

const typography = new Typography({
  ...theme,
  headerFontFamily: ['Gloria Hallelujah', 'cursive'],
  bodyFontFamily: ['Open Sans', 'sans-serif'],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    h1: {
      fontFamily: ['Gloria Hallelujah', 'cursive'].join(',')
    },
    blockquote: {
      ...adjustFontSizeTo('19px'),
      color: gray(41),
      fontStyle: 'italic',
      paddingLeft: rhythm(13 / 16),
      marginLeft: rhythm(-1),
      borderLeft: `${rhythm(3 / 16)} solid ${gray(10)}`
    },
    'blockquote > :last-child': {
      marginBottom: 0
    }
  })
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
