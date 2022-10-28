import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Lato', sans-serif`,
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'normal',
      },
    },
    Input: {
      defaultProps: {
        focusBorderColor: 'gray.300',
      },
    },
  },
});

export default theme;
