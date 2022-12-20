import type { Theme } from 'theme-ui'

export const theme: Theme = {
  fonts: {
    body: 'system-ui, sans-serif',
    heading: '"Avenir Next", sans-serif',
    monospace: 'Menlo, monospace',
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#092142',
  },
  sizes: {
    container: '1140px',
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  text: {
    default: {
      fontFamily: 'body',
      lineHeight: 'body',
    },
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
    },
  },
  buttons: {
    primary: {
      bg: 'black',
      color: 'white',
      border: '1px solid black',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 2,
      fontSize: 1,
      fontWeight: 500,
      py: 3,
      borderRadius: 6,
      boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px',
    }
  },
  forms: {
    select: {
      color: 'white',
      fontWeight: 700,
      fontFamily: 'heading',
      fontSize: 5,
      width: 300,
      border: 'none',
      bg: 'black',
      px: 3,
      '&:focus': {
        outline: 'none',
      },
    },
    input: {
      type: 'text',
      color: 'text',
      fontWeight: 700,
      fontFamily: 'heading',
      fontSize: 5,
      pl: 0,
      py: 0,
      border: 'none',
      bg: 'transparent',
      '&:focus': {
        outline: 'none',
      },
    }
  },
}
