import React from 'react';
import { Box, HStack, Stack, Text } from '@chakra-ui/react';
import { FiHome, FiPlus, FiEye, FiSettings } from 'react-icons/fi';
import Link from 'next/link';

const SIDEBAR_ITEMS = [
  {
    label: 'Home',
    icon: <FiHome />,
    href: '/',
  },
  {
    label: 'Add Product',
    icon: <FiPlus />,
    href: '/add-product',
  },
  {
    label: 'View Products',
    icon: <FiEye />,
    href: '/view-products',
  },
  {
    label: 'Settings',
    icon: <FiSettings />,
    href: '/settings',
  },
];

const Sidebar = () => {
  return (
    <Box>
      {SIDEBAR_ITEMS.map((item) => (
        <Link href={item.href} key={item.label}>
          <HStack
            py={1}
            px={2}
            rounded="md"
            color="gray.600"
            cursor="pointer"
            _hover={{
              bg: 'gray.100',
            }}
            fontSize="sm"
          >
            <Text>{item.icon}</Text>
            <Text>{item.label}</Text>
          </HStack>
        </Link>
      ))}
    </Box>
  );
};

export default Sidebar;
