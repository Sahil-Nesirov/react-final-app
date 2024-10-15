import React from 'react';
import { Link, Text, VStack } from '@chakra-ui/react';

const FooterHelp = () => {
  return (
    <VStack align="start" spacing={4}>
      <Text fontSize="xl" fontWeight="bold" color="gray.600">Help</Text>
      <Link to="/">Payment Options</Link>
      <Link to="/shop">Returns</Link>
      <Link to="/about">Privacy Policies</Link>
    </VStack>
  );
};

export default FooterHelp;
