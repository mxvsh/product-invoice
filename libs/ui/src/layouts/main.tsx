import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';

type Props = {
  title?: string;
  sidebar?: React.ReactNode;
  children?: React.ReactNode;
};
const MainLayout: React.FC<Props> = ({ title, sidebar, children }) => {
  return (
    <Flex
      maxW="2xl"
      m="auto"
      p={4}
      alignItems="flex-start"
      flexDirection="row"
      gap={6}
    >
      <Box w="44" pt={2}>
        {sidebar}
      </Box>
      <Box w="full">
        <Heading size="md" mb={4}>
          {title}
        </Heading>
        {children}
      </Box>
    </Flex>
  );
};

export { MainLayout };
