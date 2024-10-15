import React from "react";
import { Link, Text, VStack } from "@chakra-ui/react";

const FooterLinks = () => {
  return (
    <VStack align="start" spacing={4}> {/* Increased spacing between links */}
      <Text fontSize="xl" fontWeight="bold" color="gray.600">Links</Text>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </VStack>
  );
};

export default FooterLinks;
