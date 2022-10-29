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
import { Product } from '@prisma/client';
import { MainLayout } from '@product-invoice/ui';
import { useForm } from 'react-hook-form';
import { FiCheck } from 'react-icons/fi';
import Sidebar from '../components/Sidebar';

function AddProduct() {
  const form = useForm<Partial<Product>>();

  const handleSubmit = (data: Partial<Product>) => {
    const payload: Partial<Product> = {
      name: data.name,
      price: Number(data.price),
      quantity: Number(data.quantity),
      category_id: 2,
    };

    fetch('/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <MainLayout title="Add Product" sidebar={<Sidebar />}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <Stack>
          <FormControl>
            <FormLabel fontSize="sm">Product Name</FormLabel>
            <Input
              size="sm"
              placeholder="Enter product name"
              {...form.register('name')}
            />
          </FormControl>

          <FormControl>
            <FormLabel fontSize="sm">Product Price</FormLabel>
            <InputGroup size="sm">
              <InputLeftAddon>₹</InputLeftAddon>
              <Input
                type="number"
                size="sm"
                placeholder="Enter product price"
                step="any"
                {...form.register('price')}
              />
            </InputGroup>
          </FormControl>

          <FormControl>
            <FormLabel fontSize="sm">Product Quantity (optional)</FormLabel>
            <Input
              type="number"
              size="sm"
              placeholder="Enter product quantity"
              {...form.register('quantity')}
            />
          </FormControl>

          <Box>
            <Button
              colorScheme="purple"
              size="sm"
              leftIcon={<FiCheck />}
              type="submit"
            >
              Submit
            </Button>
          </Box>
        </Stack>
      </form>
    </MainLayout>
  );
}

export default AddProduct;
