// OurProducts.jsx
import React from "react";
import {
  Box,
  Image,
  Text,
  Grid,
  Button,
} from "@chakra-ui/react";
import syithrine from "../../assets/images/home/our products/frame 7/featured products 1/esas-43eebd52ea72d60650f31030ec4bf7e6.png";
import leviosa from "../../assets/images/home/our products/frame 7/featured products 2/esas-bdb0310fb379a6b1828809d2c0652533.png";
import lolito from "../../assets/images/home/our products/frame 7/featured products 3/esas-7c62fb49f7d4a1a6a5dc5959b40150ed.png";
import respira from "../../assets/images/home/our products/frame 7/featured products 4/esas-4a5dbc0c29efbae1beca6ab40dd9b598.jfif";
import grifo from "../../assets/images/home/our products/frame 8/featured products 1/esas-a7c05024ab4e27374edb12195b6559e2.png";
import muggo from "../../assets/images/home/our products/frame 8/featured products 2/esas-ea43a4c55f9e28aa3592f17ff47a4303.png";
import pingky from "../../assets/images/home/our products/frame 8/featured products 3/esas-e77ede2f478b2f26210bd264978981f6.jfif";
import potty from "../../assets/images/home/our products/frame 8/featured products 4/esas-3d98b27fb98ee49958d7089f10d39dfe.jfif";

const OurProducts = () => {
  return (
    <div style={{ padding: "20px" }}>
      <Box borderRadius="lg" p={4} bg="white" textAlign="center">
        <Text fontSize="2xl" fontWeight="bold" color="#333333">
          Our Products
        </Text>
      </Box>

      <Box mt={4} textAlign="center" mb={6}>
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          <Box width="285px" height="446px" mx="auto" mr={6}>
            <Box width="285px" height="301px">
              <Image
                src={syithrine}
                alt="Dan Abramov"
                boxSize="100%"
                objectFit="cover"
              />
            </Box>
            <box>
              <Text mt={2} fontSize="lg" align="start" mx={4}>
                <h5>Syitherine</h5>
                <p>Stylish cafe chair</p>
                <h6>
                  Rp 2.500.000 <span>Rp 3.500.000</span>
                </h6>
              </Text>
            </box>
          </Box>
          <Box width="285px" height="446px" mx="auto" mr={6}>
            <Box width="285px" height="301px">
              <Image
                src={leviosa}
                alt="Dan Abramov"
                boxSize="100%"
                objectFit="cover"
              />
            </Box>
            <box>
              <Text mt={2} fontSize="lg" align="start" mx={4}>
                <h5>Syitherine</h5>
                <p>Stylish cafe chair</p>
                <h6>
                  Rp 2.500.000 <span>Rp 3.500.000</span>
                </h6>
              </Text>
            </box>
          </Box>
          <Box width="285px" height="446px" mx="auto" mr={6}>
            <Box width="285px" height="301px">
              <Image
                src={lolito}
                alt="Dan Abramov"
                boxSize="100%"
                objectFit="cover"
              />
            </Box>
            <box>
              <Text mt={2} fontSize="lg" align="start" mx={4}>
                <h5>Syitherine</h5>
                <p>Stylish cafe chair</p>
                <h6>
                  Rp 2.500.000 <span>Rp 3.500.000</span>
                </h6>
              </Text>
            </box>
          </Box>
          <Box width="285px" height="446px" mx="auto" mr={6}>
            <Box width="285px" height="301px">
              <Image
                src={respira}
                alt="Dan Abramov"
                boxSize="100%"
                objectFit="cover"
              />
            </Box>
            <box>
              <Text mt={2} fontSize="lg" align="start" mx={4}>
                <h5>Syitherine</h5>
                <p>Stylish cafe chair</p>
                <h6>
                  Rp 2.500.000 <span>Rp 3.500.000</span>
                </h6>
              </Text>
            </box>
          </Box>
          <Box width="285px" height="446px" mx="auto" mr={6}>
            <Box width="285px" height="301px">
              <Image
                src={grifo}
                alt="Dan Abramov"
                boxSize="100%"
                objectFit="cover"
              />
            </Box>
            <box>
              <Text mt={2} fontSize="lg" align="start" mx={4}>
                <h5>Syitherine</h5>
                <p>Stylish cafe chair</p>
                <h6>
                  Rp 2.500.000 <span>Rp 3.500.000</span>
                </h6>
              </Text>
            </box>
          </Box>
          <Box width="285px" height="446px" mx="auto" mr={6}>
            <Box width="285px" height="301px">
              <Image
                src={muggo}
                alt="Dan Abramov"
                boxSize="100%"
                objectFit="cover"
              />
            </Box>
            <box>
              <Text mt={2} fontSize="lg" align="start" mx={4}>
                <h5>Syitherine</h5>
                <p>Stylish cafe chair</p>
                <h6>
                  Rp 2.500.000 <span>Rp 3.500.000</span>
                </h6>
              </Text>
            </box>
          </Box>
          <Box width="285px" height="446px" mx="auto" mr={6}>
            <Box width="285px" height="301px">
              <Image
                src={pingky}
                alt="Dan Abramov"
                boxSize="100%"
                objectFit="cover"
              />
            </Box>
            <box>
              <Text mt={2} fontSize="lg" align="start" mx={4}>
                <h5>Syitherine</h5>
                <p>Stylish cafe chair</p>
                <h6>
                  Rp 2.500.000 <span>Rp 3.500.000</span>
                </h6>
              </Text>
            </box>
          </Box>
          <Box width="285px" height="446px" mx="auto" mr={6}>
            <Box width="285px" height="301px">
              <Image
                src={potty}
                alt="Dan Abramov"
                boxSize="100%"
                objectFit="cover"
              />
            </Box>
            <box>
              <Text mt={2} fontSize="lg" align="start" mx={4}>
                <h5>Syitherine</h5>
                <p>Stylish cafe chair</p>
                <h6>
                  Rp 2.500.000 <span>Rp 3.500.000</span>
                </h6>
              </Text>
            </box>
          </Box>
        </Grid>
      </Box>
      <Box display="flex" justifyContent="center" mb={4}>
        <Button
          size="md"
          height="48px"
          width="200px"
          border="2px"
          borderColor="green.500"
        >
          Show more
        </Button>
      </Box>
    </div>
  );
};

export default OurProducts;
