import React from 'react';
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
import { useForm } from 'react-hook-form';
import { FiCheck } from 'react-icons/fi';
import { useCreateProductMutation } from './services';

const ProductEntry = () => {
  const form = useForm<Partial<Product>>();
  const [createProduct, { isLoading }] = useCreateProductMutation();

  const handleSubmit = async (data: Partial<Product>) => {
    const payload: Partial<Product> = {
      name: data.name,
      price: Number(data.price),
      quantity: Number(data.quantity),
      category_id: 1,
    };

    await createProduct(payload);
  };

  return (
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
          <FormLabel fontSize="sm">Product Quantity</FormLabel>
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
            isLoading={isLoading}
          >
            Submit
          </Button>
        </Box>
      </Stack>
    </form>
  );
};

export default ProductEntry;
