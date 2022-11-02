import { Product } from '@prisma/client';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery(),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], string | void>({
      query: (query) => `/api/products${query ? `?query=${query}` : ''}`,
    }),
    createProduct: builder.mutation<Product, Partial<Product>>({
      query: (data) => ({
        url: `/api/products`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useGetProductsQuery, useCreateProductMutation } = productApi;
