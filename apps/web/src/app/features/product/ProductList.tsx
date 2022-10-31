import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import { useGetProductsQuery } from './services';
import ProductCard from './ProductCard';

const ProductList: React.FC = () => {
  const { data } = useGetProductsQuery();

  return (
    <>
      <SimpleGrid columns={3} spacing={4}>
        {data?.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
          ></ProductCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default ProductList;
