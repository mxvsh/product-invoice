import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider as ReduxProvider } from 'react-redux';
import '@fontsource/lato/400.css';
import theme from '../theme';
import { store } from '../app/store';

function ProductInvoice({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Product Invoice</title>
      </Head>
      <main className="app">
        <ReduxProvider store={store}>
          <ChakraProvider theme={theme}>
            <Component {...pageProps} />
          </ChakraProvider>
        </ReduxProvider>
      </main>
    </>
  );
}

export default ProductInvoice;
