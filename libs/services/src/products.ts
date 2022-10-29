import { Product } from '@prisma/client';
import { dbClient } from './db';

export const searchProducts = (query: string) => {
  return dbClient.product.findMany({
    where: {
      name: {
        contains: query,
        mode: 'insensitive',
      },
    },
  });
};

export const createProduct = (data: Product) => {
  return dbClient.product.create({
    data,
  });
};
