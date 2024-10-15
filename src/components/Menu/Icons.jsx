//Icons.jsx
import { HStack, Icon, Box } from "@chakra-ui/react";
import { CiUser, CiSearch, CiHeart, CiShoppingCart } from "react-icons/ci";

const Icons = () => {
  return (
    <HStack spacing="6" bg="white" p="2" borderRadius="md">
      <Icon as={CiUser} w={6} h={6} _hover={{ color: "yellow.400" }} />
      <Icon as={CiSearch} w={6} h={6} _hover={{ color: "yellow.400" }} />
      <Icon as={CiHeart} w={6} h={6} _hover={{ color: "yellow.400" }} />
      <Icon as={CiShoppingCart} w={6} h={6} _hover={{ color: "yellow.400" }} />
    </HStack>
  );
};

export default Icons;
