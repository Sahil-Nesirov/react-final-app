// NavbarMenu.jsx
import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import Logo from "./Logo";
import CustomMenu from "./CustomMenu";
import Icons from "./Icons";
import "./style-menu/menu.css";

const NavbarMenu = () => {
  return (
    <div className="menu-container">
      <Flex
        as="header"
        justify="space-between"
        align="center"
        p="4"
        bg="white"
        boxShadow="md"
        gap="8"
      >
        {/* Logo solda, məsafə verilib */}
        <Box w="20%" ml="4">
          <Logo />
        </Box>

        {/* Menyu mərkəzdə və aralarındakı məsafə bərabərdir */}
        <Box flexGrow={1} textAlign="center">
          <CustomMenu />
        </Box>

        {/* İkonlar sağda və arxa fon ağdır */}
        <Box w="20%" mr="4">
          <Icons />
        </Box>
      </Flex>
    </div>
  );
};

export default NavbarMenu;
