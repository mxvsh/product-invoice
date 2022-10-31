import { Product } from '@prisma/client';
import { dbClient } from './db';

export const findProducts = () => {
  return dbClient.product.findMany({
    include: {
      category: true,
    },
  });
};

export const searchProducts = (query: string) => {
  return dbClient.product.findMany({
    where: {
      name: {
        contains: query,
      },
    },
  });
};

export const createProduct = (data: Product) => {
  return dbClient.product.create({
    data,
  });
};
