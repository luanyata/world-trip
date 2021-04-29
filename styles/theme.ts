import { extendTheme } from '@chakra-ui/react';

const darkTheme = {
  'p, h1': {
    color: '#47585b',
  },
};

const lightTheme = {
  'p, h1': {
    color: '#f5f8fa',
  },
};

export const theme = extendTheme({
  initialColorMode: 'light',
  useSystemColorMode: false,
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  color: {
    yellow: {
      '50': '#ffb90888',
      '800': '#ffba08',
    },
  },
  styles: {
    global: props => (props.colorMode === 'dark' ? darkTheme : lightTheme),
  },
});
