import { NextApiRequest, NextApiResponse } from 'next';
import {
  createCategory,
  findCategories,
  deleteCategory,
} from '@product-invoice/services';

export default async function categories(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const data = req.body;
    try {
      await createCategory({
        name: data.name,
      });
      res.status(200).json({ message: 'Category created' });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }

    return;
  }

  if (req.method === 'DELETE') {
    const { id } = req.query;
    try {
      await deleteCategory(Number(id));
      res.status(200).json({ message: 'Category deleted' });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
    return;
  }

  const categories = await findCategories();
  res.status(200).json(categories);
}
