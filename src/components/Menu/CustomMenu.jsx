//CustomMenu.jsx
import { Link as NavLink } from "react-router-dom";
import { Flex, Link as ChakraLink } from "@chakra-ui/react";

const CustomMenu = () => {
  return (
    <div className="customMenu">
      <Flex as="nav" gap="8" justify="center" align="center" p="4">
        <ChakraLink
          as={NavLink}
          to="/"
          exact
          _hover={{
            textDecoration: "none",
            borderBottom: "2px solid",
            borderColor: "yellow.400",
          }}
          _activeLink={{
            color: "yellow.400",
            borderBottom: "2px solid",
            borderColor: "yellow.400",
          }}
          fontWeight="bold"
          p="2"
        >
          Home
        </ChakraLink>

        <ChakraLink
          as={NavLink}
          to="/shop"
          _hover={{
            textDecoration: "none",
            borderBottom: "2px solid",
            borderColor: "yellow.400",
          }}
          _activeLink={{
            color: "yellow.400",
            borderBottom: "2px solid",
            borderColor: "yellow.400",
          }}
          fontWeight="bold"
          p="2"
        >
          Shop
        </ChakraLink>

        <ChakraLink
          as={NavLink}
          to="/about"
          _hover={{
            textDecoration: "none",
            borderBottom: "2px solid",
            borderColor: "yellow.400",
          }}
          _activeLink={{
            color: "yellow.400",
            borderBottom: "2px solid",
            borderColor: "yellow.400",
          }}
          fontWeight="bold"
          p="2"
        >
          About
        </ChakraLink>

        <ChakraLink
          as={NavLink}
          to="/contact"
          _hover={{
            textDecoration: "none",
            borderBottom: "2px solid",
            borderColor: "yellow.400",
          }}
          _activeLink={{
            color: "yellow.400",
            borderBottom: "2px solid",
            borderColor: "yellow.400",
          }}
          fontWeight="bold"
          p="2"
        >
          Contact
        </ChakraLink>

        <ChakraLink
          as={NavLink}
          to="/product"
          exact
          _hover={{
            textDecoration: "none",
            borderBottom: "2px solid",
            borderColor: "yellow.400",
          }}
          _activeLink={{
            color: "yellow.400",
            borderBottom: "2px solid",
            borderColor: "yellow.400",
          }}
          fontWeight="bold"
          p="2"
        >
          Product
        </ChakraLink>
      </Flex>
    </div>
  );
};

export default CustomMenu;
