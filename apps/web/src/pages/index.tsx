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
import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiX } from 'react-icons/fi';

const PRODUCTS_LIST = [
  {
    name: 'Paraxin 250',
    price: 103.11,
    quantity: 10,
  },

  {
    name: 'Paraxin 500',
    price: 195.71,
    quantity: 10,
  },
  {
    name: 'Movex P',
    price: 59.4,
    quantity: 10,
  },
  {
    name: 'Bio D3 Plus',
    price: 273.9,
    quantity: 15,
  },
  {
    name: 'Nimesel P',
    price: 59.6,
    quantity: 10,
  },
  {
    name: 'Dexona Tab',
    price: 6.38,
    quantity: 30,
  },
];

export function Index() {
  const form = useForm();
  const [products, setProducts] = useState([]);

  const totalAmount = useMemo(
    () => products.reduce((acc, product) => acc + product.cost, 0),
    [products]
  );

  const handleSubmit = (data) => {
    const product = PRODUCTS_LIST.find((p) => p.name === data.name);

    if (!data.quantity || !data.name) return;

    if (product) {
      const productData = {
        name: data.name,
        price: product.price,
        quantity: parseInt(data.quantity),
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
                  placeholder="Enter product name"
                  {...form.register('name')}
                />
                <AutoCompleteList fontSize={12}>
                  {PRODUCTS_LIST.map((product, cid) => (
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

      <TableContainer>
        <Table variant="striped" size="sm">
          <Thead>
            <Tr>
              <Th w="1"></Th>
              <Th>Name</Th>
              <Th isNumeric>Quantity</Th>
              <Th isNumeric>Cost</Th>
            </Tr>
          </Thead>
          <Tbody>
            {products.map((product, idx) => {
              return (
                <Tr key={idx} fontSize="sm">
                  <Td cursor="pointer">
                    <FiX
                      onClick={() => {
                        setProducts((prev) => {
                          const newProducts = [...prev];
                          newProducts.splice(idx, 1);
                          return newProducts;
                        });
                      }}
                    />
                  </Td>
                  <Td>{product.name} </Td>
                  <Td
                    isNumeric
                    contentEditable
                    onKeyUp={(e: any) => {
                      if (e.key === 'Enter') {
                        e.target.blur();
                      }
                    }}
                    onBlur={(e: any) => {
                      const { textContent } = e.target;
                      const productData = PRODUCTS_LIST.find(
                        (p) => p.name === product.name
                      );
                      const rate = productData.price / productData.quantity;
                      const newPrice = rate * parseInt(textContent);

                      setProducts((prev) => {
                        const newProducts = [...prev];
                        newProducts[idx].quantity = parseInt(textContent);
                        newProducts[idx].cost = newPrice;

                        return newProducts;
                      });
                    }}
                  >
                    {product.quantity}
                  </Td>
                  <Td isNumeric>₹{product.cost.toFixed(2)}</Td>
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
