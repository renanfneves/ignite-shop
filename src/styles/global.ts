import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    '-webkit-font-smothing': 'antialiased',
    backgroundColor: '$gray900',
    color: '$gray100',
  },

  'body, input, textArea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400,
  },

  button: {
    cursor: 'pointer',
  },
})
