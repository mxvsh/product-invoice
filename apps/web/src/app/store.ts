import { configureStore } from '@reduxjs/toolkit';
import { productApi } from './features/product/services';
import { categoryApi } from './features/category/services';

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      ...[productApi.middleware, categoryApi.middleware]
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
