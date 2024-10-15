import React from 'react';
import { Box, Text, Input, Button, Flex } from '@chakra-ui/react';

const FooterNewsletter = () => {
  return (
    <Box>
      <Text fontSize="xl" fontWeight="bold" color="gray.600">Newsletter</Text>
      <Flex mt="2">
        <Input 
          type="email" 
          placeholder="Enter your email address" 
          borderColor="transparent" 
          borderBottomWidth="1px" 
          borderBottomColor="gray.500" 
          _focus={{ borderBottomColor: "yellow.400" }} 
          mr="2"  // Right margin for spacing
        />
        <Button type="submit" colorScheme="yellow">Subscribe</Button>
      </Flex>
    </Box>
  );
};

export default FooterNewsletter;
