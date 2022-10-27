import { MainLayout } from '@product-invoice/ui';
import Sidebar from '../components/Sidebar';

export function Index() {
  return <MainLayout title="Home" sidebar={<Sidebar />}></MainLayout>;
}

export default Index;
