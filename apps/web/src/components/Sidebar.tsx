import React from 'react';
import { Box, HStack, Text } from '@chakra-ui/react';
import { FiHome, FiPlus, FiEye, FiSettings, FiFileText } from 'react-icons/fi';
import Link from 'next/link';
import { useRouter } from 'next/router';

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
    label: 'Invoices',
    icon: <FiFileText />,
    href: '/invoices',
  },
  {
    label: 'Settings',
    icon: <FiSettings />,
    href: '/settings',
  },
];

const Sidebar = () => {
  const r = useRouter();

  return (
    <Box>
      {SIDEBAR_ITEMS.map((item) => {
        const isActive = r.pathname === item.href;

        return (
          <Link href={item.href} key={item.label}>
            <HStack
              py={1}
              px={2}
              rounded="md"
              bg={isActive ? 'purple.50' : 'transparent'}
              color={isActive ? 'purple.500' : 'gray.500'}
              cursor="pointer"
              _hover={{
                bg: !isActive && 'gray.100',
              }}
              fontSize="sm"
            >
              <Text>{item.icon}</Text>
              <Text>{item.label}</Text>
            </HStack>
          </Link>
        );
      })}
    </Box>
  );
};

export default Sidebar;
