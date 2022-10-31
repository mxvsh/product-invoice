import { MainLayout, Sidebar } from '@product-invoice/ui';
import ProductList from '../app/features/product/ProductList';

function ViewProducts() {
  return (
    <MainLayout title="View Products" sidebar={<Sidebar />}>
      <ProductList />
    </MainLayout>
  );
}

export default ViewProducts;
