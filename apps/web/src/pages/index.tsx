import { MainLayout } from '@product-invoice/ui';
import Card from '../components/Card';
import Sidebar from '../components/Sidebar';
import {
  Button,
  ButtonGroup,
  Divider,
  FormControl,
  Heading,
  HStack,
  Input,
  Spacer,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from '@choc-ui/chakra-autocomplete';
import React, { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiX } from 'react-icons/fi';
import { useGetProductsQuery } from '../app/features/product/services';

export function Index() {
  const form = useForm();
  const name = form.watch('name');
  const [products, setProducts] = useState([]);
  const { data: productsFromDb } = useGetProductsQuery(name);

  const totalAmount = useMemo(
    () => products.reduce((acc, product) => acc + product.cost, 0),
    [products]
  );

  const handleSubmit = (data) => {
    const product = productsFromDb.find((p) => p.name === data.name);

    if (!data.quantity || !data.name) return;

    if (product) {
      const productData = {
        name: data.name,
        price: product.price,
        quantity: parseInt(data.quantity),
        original_quantity: product.quantity,
        cost: Number(
          (product.price / product.quantity) * parseInt(data.quantity)
        ),
      };

      setProducts([...products, productData]);
      form.reset();
    }
  };

  return (
    <MainLayout title="Shahi Medical Hall" sidebar={<Sidebar />}>
      <Card
        title="Generate Invoice"
        subtitle="Add products to generate invoice"
      >
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <Stack>
            <FormControl>
              <AutoComplete>
                <AutoCompleteInput
                  size="sm"
                  autoComplete="off"
                  placeholder="Enter product name"
                  {...form.register('name')}
                />
                <AutoCompleteList fontSize={12}>
                  {productsFromDb?.map((product, cid) => (
                    <AutoCompleteItem
                      key={`option-${cid}`}
                      value={product.name}
                      textTransform="capitalize"
                    >
                      <Text>{product.name}</Text>
                      <Spacer />
                      <Text>₹{product.price}</Text>
                    </AutoCompleteItem>
                  ))}
                </AutoCompleteList>
              </AutoComplete>
            </FormControl>

            <FormControl>
              <Input
                size="sm"
                placeholder="Enter quantity"
                {...form.register('quantity')}
              />
            </FormControl>

            <ButtonGroup size="sm">
              <Button colorScheme="purple" type="submit">
                Add
              </Button>
              <Button
                colorScheme="red"
                variant="ghost"
                onClick={() => {
                  setProducts([]);
                }}
              >
                Reset
              </Button>
            </ButtonGroup>
          </Stack>
        </form>
      </Card>

      <Divider my={4} />

      <TableContainer display={products.length > 0 ? 'block' : 'none'}>
        <Table variant="striped" size="sm">
          <Thead>
            <Tr>
              {/* <Th w="1"></Th> */}
              <Th>Name</Th>
              <Th isNumeric>Quantity</Th>
              <Th isNumeric>Cost</Th>
            </Tr>
          </Thead>
          <Tbody>
            {products.map((product, idx) => {
              return (
                <Tr key={idx} fontSize="sm">
                  {/* <Td cursor="pointer">
                    <FiX
                      onClick={() => {
                        setProducts((prev) => {
                          const newProducts = [...prev];
                          newProducts.splice(idx, 1);
                          return newProducts;
                        });
                      }}
                    />
                  </Td> */}
                  <Td w="44">{product.name}</Td>
                  <Td w="14" isNumeric>
                    <Input
                      size="xs"
                      textAlign="right"
                      defaultValue={product.quantity}
                      onKeyUp={(e: any) => {
                        if (e.key === 'Enter') {
                          e.target.blur();
                        }
                      }}
                      onBlur={(e) => {
                        let { value } = e.target;
                        if (!value) {
                          value = '0';
                        }

                        const productData = products.find(
                          (p) => p.name === product.name
                        );

                        if (!productData) return;

                        const rate =
                          productData.price / productData.original_quantity;
                        const newPrice = rate * parseInt(value);

                        setProducts((prev) => {
                          const newProducts = [...prev];
                          newProducts[idx].quantity = parseInt(value);
                          newProducts[idx].cost = newPrice;

                          return newProducts;
                        });
                      }}
                    />
                  </Td>
                  <Td w="24" isNumeric>
                    ₹{product.cost.toFixed(2)}
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>

      <HStack>
        <Heading size="sm">Total Amount</Heading>
        <Spacer />
        <Heading size="sm">₹{totalAmount.toFixed(2)}</Heading>
      </HStack>
    </MainLayout>
  );
}

export default Index;
