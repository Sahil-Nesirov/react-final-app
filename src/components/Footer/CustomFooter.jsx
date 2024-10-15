import React from "react";
import { Flex, Box, Text, Input, Button, VStack } from "@chakra-ui/react";
import FooterDesc from "./FooterDesc";
import FooterLinks from "./FooterLinks";
import FooterHelp from "./FooterHelp";
import FooterNewsletter from "./FooterNewsletter";
import FooterText from "./FooterText";
import './style-footer/mainFooter.css';

const CustomFooter = () => {
  return (
    <div className="footer-container">
      <Flex className="footer-over" justify="space-between" p="4" bg="white">
        <Box flex="1" mr="4">
          <FooterDesc />
        </Box>
        <Box flex="1" mr="4">
          <FooterLinks />
        </Box>
        <Box flex="1" mr="4">
          <FooterHelp />
        </Box>
        <Box flex="1">
          <FooterNewsletter />
        </Box>
      </Flex>
      <Box className="footer-under" textAlign="left" p="4" bg="gray.200">
        <FooterText />
      </Box>
    </div>
  );
};

export default CustomFooter;
