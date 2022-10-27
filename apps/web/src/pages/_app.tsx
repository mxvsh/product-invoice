import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import Head from 'next/head';

function ProductInvoice({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Product Invoice</title>
      </Head>
      <main className="app">
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </main>
    </>
  );
}

export default ProductInvoice;
