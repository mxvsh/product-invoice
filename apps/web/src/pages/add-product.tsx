import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
} from '@chakra-ui/react';
import { MainLayout } from '@product-invoice/ui';
import { FiCheck } from 'react-icons/fi';
import Sidebar from '../components/Sidebar';

function AddProduct() {
  return (
    <MainLayout title="Add Product" sidebar={<Sidebar />}>
      <Stack>
        <FormControl>
          <FormLabel fontSize="sm">Product Name</FormLabel>
          <Input size="sm" placeholder="Enter product name" />
        </FormControl>

        <FormControl>
          <FormLabel fontSize="sm">Product Price</FormLabel>
          <InputGroup size="sm">
            <InputLeftAddon>₹</InputLeftAddon>
            <Input type="number" size="sm" placeholder="Enter product price" />
          </InputGroup>
        </FormControl>

        <Box>
          <Button colorScheme="purple" size="sm" leftIcon={<FiCheck />}>
            Submit
          </Button>
        </Box>
      </Stack>
    </MainLayout>
  );
}

export default AddProduct;
