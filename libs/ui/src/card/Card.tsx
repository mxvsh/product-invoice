import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

type Props = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};
const Card: React.FC<Props> = ({ title, subtitle, children }) => {
  return (
    <Box>
      <Heading size="sm" fontWeight="semibold" color="gray.600">
        {title}
      </Heading>
      {subtitle && (
        <Text fontSize="sm" color="gray.500" mt={1}>
          {subtitle}
        </Text>
      )}

      <Box mt={4} mb={2}>
        {children}
      </Box>
    </Box>
  );
};

export { Card };
