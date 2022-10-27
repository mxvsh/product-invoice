import { MainLayout } from '@product-invoice/ui';
import Sidebar from '../components/Sidebar';

function ViewProducts() {
  return <MainLayout title="View Products" sidebar={<Sidebar />}></MainLayout>;
}

export default ViewProducts;
