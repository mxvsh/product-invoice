import { Product } from '@prisma/client';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fetchBaseQuery(),
  endpoints: (builder) => ({
    // todo: sperate function for searching
    getCategories: builder.query<Product[], string | void>({
      query: () => `/api/categories`,
    }),
  }),
});

export const { useGetCategoriesQuery } = categoryApi;
