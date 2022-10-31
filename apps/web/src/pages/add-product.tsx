import { MainLayout, Sidebar } from '@product-invoice/ui';
import ProductEntry from '../app/features/product/ProductEntry';

function AddProduct() {
  return (
    <MainLayout title="Add Product" sidebar={<Sidebar />}>
      <ProductEntry />
    </MainLayout>
  );
}

export default AddProduct;
