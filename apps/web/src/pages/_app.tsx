import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import '@fontsource/lato/400.css';
import theme from '../theme';

function ProductInvoice({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Product Invoice</title>
      </Head>
      <main className="app">
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </main>
    </>
  );
}

export default ProductInvoice;
