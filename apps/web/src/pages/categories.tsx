import {
  Box,
  Button,
  ButtonGroup,
  Center,
  SimpleGrid,
  Spinner,
  Text,
} from '@chakra-ui/react';
import { Category } from '@prisma/client';
import { MainLayout } from '@product-invoice/ui';
import React, { useEffect, useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import Sidebar from '../components/Sidebar';

type CategoryCardProps = {
  name: string;
  actions?: React.ReactNode;
};
const CategoryCard: React.FC<CategoryCardProps> = ({ name, actions }) => (
  <Box
    px={2}
    py={4}
    borderWidth="1px"
    borderColor="gray.300"
    rounded="lg"
    fontSize="sm"
    role="group"
    position="relative"
  >
    <Text
      textAlign="center"
      _groupHover={{
        // blur
        filter: 'blur(2px)',
      }}
    >
      {name}
    </Text>
    <Center
      display="none"
      _groupHover={{
        display: 'block',
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      {actions}
    </Center>
  </Box>
);

function Categories() {
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  const fetchCategories = () => {
    setIsLoading(true);
    fetch('/api/categories')
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setCategories(data);
      });
  };

  const newCategory = () => {
    const name = prompt('Enter category name');
    if (!name) return;

    fetch('/api/categories', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }),
    }).then(() => {
      fetchCategories();
    });
  };

  const deleteCategory = (id: number) => {
    if (!confirm('Are you sure?')) return;

    fetch(`/api/categories?id=${id}`, {
      method: 'DELETE',
    }).then(() => {
      fetchCategories();
    });
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <MainLayout title="Categories" sidebar={<Sidebar />}>
      {isLoading ? <Spinner /> : null}

      <SimpleGrid columns={3} spacing={4} display={isLoading ? 'none' : 'grid'}>
        {categories?.map((category: Category) => (
          <CategoryCard
            key={category.id}
            name={category.name}
            actions={
              <ButtonGroup size="xs">
                <Button colorScheme="purple">Edit</Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    deleteCategory(category.id);
                  }}
                >
                  Delete
                </Button>
              </ButtonGroup>
            }
          />
        ))}

        <Center
          px={2}
          py={4}
          fontSize="lg"
          borderWidth="1px"
          borderColor="gray.300"
          rounded="lg"
          cursor="pointer"
          _hover={{
            // shadow: 'base',
            borderColor: 'purple.500',
          }}
          onClick={newCategory}
        >
          <FiPlus />
        </Center>
      </SimpleGrid>
    </MainLayout>
  );
}

export default Categories;
