import React from 'react';
import { Box, Heading, IconButton, Text } from '@chakra-ui/react';
import { Product } from '@prisma/client';
import { FiEdit2 } from 'react-icons/fi';

type Props = Partial<Product> & {
  //
};
const ProductCard: React.FC<Props> = ({ name, price }) => {
  return (
    <Box p={2} borderWidth="1px" rounded="xl" position="relative">
      <Heading size="xs" color="gray.700">
        {name}
      </Heading>
      <Text fontSize="sm" color="gray.500">
        ₹{price.toFixed(2)}
      </Text>

      <IconButton
        aria-label="edit"
        size="xs"
        icon={<FiEdit2 />}
        position="absolute"
        top={2}
        right={2}
      />
    </Box>
  );
};

export default ProductCard;
