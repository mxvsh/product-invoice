import { Category } from '@prisma/client';
import { dbClient } from './db';

export const createCategory = (data: Pick<Category, 'name'>) => {
  return dbClient.category.create({
    data,
  });
};

export const findCategories = () => {
  return dbClient.category.findMany();
};

export const deleteCategory = (id: number) => {
  return dbClient.category.delete({
    where: {
      id,
    },
  });
};
