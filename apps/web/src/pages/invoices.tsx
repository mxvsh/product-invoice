import { MainLayout } from '@product-invoice/ui';
import Sidebar from '../components/Sidebar';

function Invoice() {
  return <MainLayout title="Invoices" sidebar={<Sidebar />}></MainLayout>;
}

export default Invoice;
