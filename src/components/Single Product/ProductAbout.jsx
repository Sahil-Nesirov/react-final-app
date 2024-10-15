// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Flex,
//   Image,
//   Text,
//   Button,
//   IconButton,
//   Stack,
//   Select,
//   Input,
//   SimpleGrid,
//   useColorModeValue,
//   RadioGroup,
//   Radio,
// } from "@chakra-ui/react";
// import { FaStar } from "react-icons/fa";
// import { AddIcon, MinusIcon } from "@chakra-ui/icons";

// const ProductAbout = () => {
//   const [product, setProduct] = useState(null);
//   const [quantity, setQuantity] = useState(1);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [selectedColor, setSelectedColor] = useState("blue");

//   useEffect(() => {
//     // API'den data çekme simulyasiyası
//     const fetchProductData = async () => {
//       // Fack API-dən məlumat
//       const data = {
//         id: 1,
//         title: "Asgaard sofa",
//         price: 250000,
//         reviews: 5,
//         description:
//           "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio.",
//         images: [
//           "https://via.placeholder.com/400x400",
//           "https://via.placeholder.com/100",
//           "https://via.placeholder.com/100",
//           "https://via.placeholder.com/100",
//         ],
//         colors: ["blue", "red", "green", "yellow"],
//       };
//       setProduct(data);
//       setSelectedImage(data.images[0]);
//     };

//     fetchProductData();
//   }, []);

//   const handleQuantityChange = (type) => {
//     if (type === "increase") {
//       setQuantity(quantity + 1);
//     } else if (type === "decrease" && quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//   const handleImageChange = (image) => {
//     setSelectedImage(image);
//   };

//   const handleColorChange = (color) => {
//     setSelectedColor(color);
//   };

//   if (!product) return <Text>Loading...</Text>;

//   return (
//     <Box maxW="1200px" mx="auto" p="4">
//       <Flex direction={{ base: "column", md: "row" }} gap="8">
//         {/* Sol Şəkillər */}
//         <Box w={{ base: "100%", md: "50%" }}>
//           <Image
//             src={selectedImage}
//             alt={product.title}
//             w="100%"
//             h="auto"
//             borderRadius="lg"
//           />
//           <SimpleGrid columns={4} spacing={4} mt="4">
//             {product.images.map((img, index) => (
//               <Image
//                 key={index}
//                 src={img}
//                 alt={`Product thumbnail ${index}`}
//                 cursor="pointer"
//                 border={selectedImage === img ? "2px solid teal" : "none"}
//                 onClick={() => handleImageChange(img)}
//                 borderRadius="md"
//               />
//             ))}
//           </SimpleGrid>
//         </Box>

//         {/* Məhsul Məlumatları */}
//         <Box w={{ base: "100%", md: "50%" }}>
//           <Text fontSize="2xl" fontWeight="bold">
//             {product.title}
//           </Text>

//           <Text fontSize="xl" color="gray.500">
//             Rs. {product.price.toLocaleString()}
//           </Text>

//           {/* Rəylər */}
//           <Flex align="center" mt="2">
//             {[...Array(product.reviews)].map((_, i) => (
//               <FaStar key={i} color="gold" />
//             ))}
//             <Text ml="2">({product.reviews} Customer Reviews)</Text>
//           </Flex>

//           {/* Məhsul Açıklaması */}
//           <Text mt="4" fontSize="md" color="gray.600">
//             {product.description}
//           </Text>

//           {/* Say Artırma/Azaltma */}
//           <Flex align="center" mt="4">
//             <IconButton
//               icon={<MinusIcon />}
//               onClick={() => handleQuantityChange("decrease")}
//               aria-label="Decrease quantity"
//             />
//             <Input
//               value={quantity}
//               readOnly
//               textAlign="center"
//               w="50px"
//               mx="2"
//             />
//             <IconButton
//               icon={<AddIcon />}
//               onClick={() => handleQuantityChange("increase")}
//               aria-label="Increase quantity"
//             />
//           </Flex>

//           {/* Ölçü Seçimi */}
//           <Stack direction="row" spacing="4" mt="4" align="center">
//             <Select placeholder="Size" maxW="100px">
//               <option value="xs">XS</option>
//               <option value="l">L</option>
//               <option value="xl">XL</option>
//             </Select>
//           </Stack>

//           {/* Rəng Seçimi */}
//           <RadioGroup
//             onChange={handleColorChange}
//             value={selectedColor}
//             mt="4"
//           >
//             <Stack direction="row" spacing="4">
//               {product.colors.map((color) => (
//                 <Radio
//                   key={color}
//                   value={color}
//                   colorScheme={color}
//                   size="lg"
//                 >
//                   {color}
//                 </Radio>
//               ))}
//             </Stack>
//           </RadioGroup>

//           {/* Səbətə əlavə et və Müqayisə */}
//           <Stack direction="row" spacing="4" mt="6">
//             <Button colorScheme="teal" bg="white" border="1px solid teal">
//               Add To Cart
//             </Button>
//             <Button variant="outline" colorScheme="teal">
//               Compare
//             </Button>
//           </Stack>
//         </Box>
//       </Flex>
//     </Box>
//   );
// };

// export default ProductAbout;

// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Flex,
//   Image,
//   Text,
//   Button,
//   IconButton,
//   Stack,
//   Select,
//   Input,
//   RadioGroup,
//   Radio,
//   VStack,
//   HStack,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   useDisclosure,
//   useToast,
// } from "@chakra-ui/react";
// import { FaStar, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
// import { AddIcon, MinusIcon, ChevronUpIcon, ChevronDownIcon, CloseIcon } from "@chakra-ui/icons";

// const ProductAbout = () => {
//   const [product, setProduct] = useState(null);
//   const [quantity, setQuantity] = useState(1);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [selectedColor, setSelectedColor] = useState("blue");
//   const [visibleImages, setVisibleImages] = useState(0); // Kiçik şəkillər üçün slayder halında dəyişmək
//   const [cart, setCart] = useState([]);
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const toast = useToast();

//   useEffect(() => {
//     // Fack API simulyasiyası
//     const fetchProductData = async () => {
//       const data = {
//         id: 1,
//         title: "Asgaard sofa",
//         price: 250000,
//         reviews: 5,
//         description:
//           "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio.",
//         images: Array(8).fill("https://via.placeholder.com/400x400"), // 8 dinamik şəkil
//         colors: ["blue", "red", "green", "yellow"],
//         sku: "SS001",
//         category: "Sofas",
//         tags: ["Sofa", "Chair", "Home", "Shop"],
//       };
//       setProduct(data);
//       setSelectedImage(data.images[0]); // İlk şəkil böyük olaraq seçilir
//     };

//     fetchProductData();
//   }, []);

//   const handleQuantityChange = (type) => {
//     if (type === "increase") {
//       setQuantity(quantity + 1);
//     } else if (type === "decrease" && quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//   const handleImageChange = (image) => {
//     setSelectedImage(image); // Kliklədikdə böyük şəkli dəyişdirir
//   };

//   const handleColorChange = (color) => {
//     setSelectedColor(color);
//   };

//   const handleAddToCart = () => {
//     const existingItem = cart.find((item) => item.id === product.id);

//     if (existingItem) {
//       toast({
//         title: "This item is already in the cart",
//         status: "warning",
//         duration: 2000,
//         isClosable: true,
//       });
//     } else {
//       setCart([...cart, { ...product, quantity }]);
//       onOpen(); // Modal açılır
//     }
//   };

//   const handleRemoveFromCart = (id) => {
//     setCart(cart.filter((item) => item.id !== id));
//   };

//   const handleScrollUp = () => {
//     if (visibleImages > 0) setVisibleImages(visibleImages - 1);
//   };

//   const handleScrollDown = () => {
//     if (visibleImages + 4 < product.images.length) {
//       setVisibleImages(visibleImages + 1);
//     }
//   };

//   if (!product) return <Text>Loading...</Text>;

//   return (
//     <Box maxW="1200px" mx="auto" p="4">
//       <Flex direction={{ base: "column", md: "row" }} gap="8">
//         {/* Sol Kiçik Şəkillər */}
//         <Box position="relative" w="100px">
//           {visibleImages > 0 && (
//             <IconButton
//               icon={<ChevronUpIcon />}
//               onClick={handleScrollUp}
//               position="absolute"
//               top="-30px"
//               left="35px"
//               aria-label="Scroll up"
//             />
//           )}
//           <VStack spacing={4} align="flex-start" maxH="350px" overflow="hidden">
//             {product.images
//               .slice(visibleImages, visibleImages + 4)
//               .map((img, index) => (
//                 <Image
//                   key={index}
//                   src={img}
//                   alt={`Product thumbnail ${index}`}
//                   cursor="pointer"
//                   border={selectedImage === img ? "2px solid teal" : "none"}
//                   onClick={() => handleImageChange(img)} // Kiçik şəkillərə kliklədikdə böyük şəkil dəyişir
//                   borderRadius="md"
//                   w="80px"
//                   h="80px"
//                 />
//               ))}
//           </VStack>
//           {visibleImages + 4 < product.images.length && (
//             <IconButton
//               icon={<ChevronDownIcon />}
//               onClick={handleScrollDown}
//               position="absolute"
//               bottom="-30px"
//               left="35px"
//               aria-label="Scroll down"
//             />
//           )}
//         </Box>

//         {/* Məhsul Şəkli və Məlumatları */}
//         <Flex w={{ base: "100%", md: "75%" }} direction={{ base: "column", lg: "row" }}>
//           <Box flex="1" pr="4">
//             <Image
//               src={selectedImage} // Böyük şəkil dinamik olaraq dəyişir
//               alt={product.title}
//               w="100%"
//               h="auto"
//               borderRadius="lg"
//             />
//           </Box>

//           <Box flex="1">
//             <Text fontSize="2xl" fontWeight="bold">
//               {product.title}
//             </Text>

//             <Text fontSize="xl" color="gray.500">
//               Rs. {product.price.toLocaleString()}
//             </Text>

//             {/* Rəylər */}
//             <Flex align="center" mt="2">
//               {[...Array(product.reviews)].map((_, i) => (
//                 <FaStar key={i} color="gold" />
//               ))}
//               <Text ml="2">({product.reviews} Customer Reviews)</Text>
//             </Flex>

//             {/* Məhsul Açıklaması */}
//             <Text mt="4" fontSize="md" color="gray.600">
//               {product.description}
//             </Text>

//             {/* Say Artırma/Azaltma */}
//             <Flex align="center" mt="4">
//               <IconButton
//                 icon={<MinusIcon />}
//                 onClick={() => handleQuantityChange("decrease")}
//                 aria-label="Decrease quantity"
//               />
//               <Input
//                 value={quantity}
//                 readOnly
//                 textAlign="center"
//                 w="50px"
//                 mx="2"
//               />
//               <IconButton
//                 icon={<AddIcon />}
//                 onClick={() => handleQuantityChange("increase")}
//                 aria-label="Increase quantity"
//               />
//             </Flex>

//             {/* Ölçü Seçimi */}
//             <Stack direction="row" spacing="4" mt="4" align="center">
//               <Select placeholder="Size" maxW="100px">
//                 <option value="xs">XS</option>
//                 <option value="l">L</option>
//                 <option value="xl">XL</option>
//               </Select>
//             </Stack>

//             {/* Rəng Seçimi */}
//             <RadioGroup
//               onChange={handleColorChange}
//               value={selectedColor}
//               mt="4"
//             >
//               <Stack direction="row" spacing="4">
//                 {product.colors.map((color) => (
//                   <Radio
//                     key={color}
//                     value={color}
//                     colorScheme={color}
//                     size="lg"
//                   >
//                     {color}
//                   </Radio>
//                 ))}
//               </Stack>
//             </RadioGroup>

//             {/* Səbətə əlavə et və Müqayisə */}
//             <Stack direction="row" spacing="4" mt="6">
//               <Button colorScheme="teal" bg="white" border="1px solid teal" onClick={handleAddToCart}>
//                 Add To Cart
//               </Button>
//               <Button variant="outline" colorScheme="teal">
//                 Compare
//               </Button>
//             </Stack>

//             {/* SKU, Kategoriya, Taglar və Sosial Şəbəkə İkonları */}
//             <Stack mt="6" spacing="4">
//               <Text>SKU: {product.sku}</Text>
//               <Text>Category: {product.category}</Text>
//               <Text>Tags: {product.tags.join(", ")}</Text>

//               {/* Sosial Şəbəkə İkonları */}
//               <HStack spacing="4" mt="4">
//                 <IconButton
//                   icon={<FaFacebook />}
//                   aria-label="Facebook"
//                   variant="ghost"
//                   colorScheme="facebook"
//                 />
//                 <IconButton
//                   icon={<FaTwitter />}
//                   aria-label="Twitter"
//                   variant="ghost"
//                   colorScheme="twitter"
//                 />
//                 <IconButton
//                   icon={<FaInstagram />}
//                   aria-label="Instagram"
//                   variant="ghost"
//                   colorScheme="pink"
//                 />
//               </HStack>
//             </Stack>
//           </Box>
//         </Flex>
//       </Flex>

//       {/* Add to Cart Modal */}
//       <Modal isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent maxW="600px">
//           <ModalHeader>Shopping Cart</ModalHeader>
//           <ModalBody>
//             {cart.length > 0 ? (
//               cart.map((item) => (
//                 <Flex key={item.id} justifyContent="space-between" alignItems="center" mb="4">
//                   <Image src={item.images[0]} w="50px" h="50px" borderRadius="md" />
//                   <Box flex="1" ml="4">
//                     <Text>{item.title}</Text>
//                     <Text fontSize="sm">Rs. {item.price.toLocaleString()}</Text>
//                     <Text fontSize="sm">Quantity: {item.quantity}</Text>
//                   </Box>
//                   <IconButton
//                     icon={<CloseIcon />}
//                     aria-label="Remove item"
//                     onClick={() => handleRemoveFromCart(item.id)}
//                   />
//                 </Flex>
//               ))
//             ) : (
//               <Text>No items in the cart.</Text>
//             )}
//           </ModalBody>
//           <ModalFooter>
//             <Button onClick={onClose} colorScheme="teal">
//               Close
//             </Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </Box>
//   );
// };

// export default ProductAbout;

// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Flex,
//   Image,
//   Text,
//   Button,
//   IconButton,
//   Stack,
//   Select,
//   Input,
//   RadioGroup,
//   Radio,
//   VStack,
//   HStack,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   useDisclosure,
//   useToast,
//   SlideFade,
// } from "@chakra-ui/react";
// import { FaStar, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
// import { AddIcon, MinusIcon, ChevronLeftIcon, ChevronRightIcon, CloseIcon } from "@chakra-ui/icons";

// const ProductAbout = () => {
//   const [product, setProduct] = useState(null);
//   const [quantity, setQuantity] = useState(1);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [selectedColor, setSelectedColor] = useState("blue");
//   const [selectedSize, setSelectedSize] = useState("L"); // Default size
//   const [currentIndex, setCurrentIndex] = useState(0); // Kiçik şəkillərin indisi
//   const [cart, setCart] = useState([]);
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const toast = useToast();

//   useEffect(() => {
//     // Fake API simulyasiyası
//     const fetchProductData = async () => {
//       const data = {
//         id: 1,
//         title: "Asgaard Sofa",
//         price: 250000,
//         reviews: 5,
//         description:
//           "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio.",
//         images: Array.from({ length: 12 }, (_, index) => `https://via.placeholder.com/400x400?text=Image+${index + 1}`), // 12 dinamik şəkil
//         colors: ["blue", "red", "green", "yellow"],
//         sku: "SS001",
//         category: "Sofas",
//         tags: ["Sofa", "Chair", "Home", "Shop"],
//       };
//       setProduct(data);
//       setSelectedImage(data.images[0]); // İlk şəkil böyük olaraq seçilir
//     };

//     fetchProductData();
//   }, []);

//   const handleQuantityChange = (type) => {
//     if (type === "increase") {
//       setQuantity(quantity + 1);
//     } else if (type === "decrease" && quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//   const handleImageChange = (image) => {
//     setSelectedImage(image); // Kliklədikdə böyük şəkli dəyişdirir
//   };

//   const handleColorChange = (color) => {
//     setSelectedColor(color);
//   };

//   const handleSizeChange = (size) => {
//     setSelectedSize(size);
//   };

//   const handleAddToCart = () => {
//     const existingItem = cart.find((item) => item.id === product.id);

//     if (existingItem) {
//       toast({
//         title: "This item is already in the cart",
//         status: "warning",
//         duration: 2000,
//         isClosable: true,
//       });
//     } else {
//       setCart([...cart, { ...product, quantity, selectedImage, selectedColor, selectedSize }]);
//       onOpen(); // Modal açılır
//     }
//   };

//   const handleRemoveFromCart = (id) => {
//     setCart(cart.filter((item) => item.id !== id));
//   };

//   const nextImages = () => {
//     if (currentIndex + 5 < product.images.length) {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   const prevImages = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     }
//   };

//   if (!product) return <Text>Loading...</Text>;

//   return (
//     <Box maxW="1200px" mx="auto" p="4">
//       <Flex direction={{ base: "column", md: "row" }} gap="8">
//         {/* Kiçik Şəkillər */}
//         <Box position="relative" w="120px" overflow="hidden">
//           <IconButton
//             icon={<ChevronLeftIcon />}
//             onClick={prevImages}
//             isDisabled={currentIndex === 0}
//             position="absolute"
//             top="0"
//             left="0"
//             zIndex="10"
//             aria-label="Previous"
//             borderRadius="full"
//             bg="gray.500"
//             color="white"
//             boxShadow="md"
//           />
//           <VStack spacing={2} align="flex-start" transition="transform 0.5s ease" transform={`translateY(-${currentIndex * 100}px)`}>
//             {product.images.slice(currentIndex, currentIndex + 5).map((img, index) => (
//               <Image
//                 key={index}
//                 src={img}
//                 alt={`Product thumbnail ${index}`}
//                 cursor="pointer"
//                 border={selectedImage === img ? "2px solid teal" : "none"}
//                 onClick={() => handleImageChange(img)} // Kiçik şəkillərə kliklədikdə böyük şəkil dəyişir
//                 borderRadius="md"
//                 w="100px"
//                 h="100px"
//               />
//             ))}
//           </VStack>
//           <IconButton
//             icon={<ChevronRightIcon />}
//             onClick={nextImages}
//             isDisabled={currentIndex + 5 >= product.images.length}
//             position="absolute"
//             bottom="0"
//             right="0"
//             zIndex="10"
//             aria-label="Next"
//             borderRadius="full"
//             bg="gray.500"
//             color="white"
//             boxShadow="md"
//           />
//         </Box>

//         {/* Məhsul Şəkli və Məlumatları */}
//         <Flex w={{ base: "100%", md: "75%" }} direction={{ base: "column", lg: "row" }}>
//           <Box flex="1" pr="4">
//             <Image
//               src={selectedImage} // Böyük şəkil dinamik olaraq dəyişir
//               alt={product.title}
//               w="100%"
//               h="auto"
//               borderRadius="lg"
//             />
//           </Box>

//           <Box flex="1">
//             <Text fontSize="2xl" fontWeight="bold">
//               {product.title}
//             </Text>

//             <Text fontSize="xl" color="gray.500">
//               Rs. {product.price.toLocaleString()}
//             </Text>

//             {/* Rəylər */}
//             <Flex align="center" mt="2">
//               {[...Array(product.reviews)].map((_, i) => (
//                 <FaStar key={i} color="gold" />
//               ))}
//               <Text ml="2">({product.reviews} Customer Reviews)</Text>
//             </Flex>

//             {/* Məhsul Açıklaması */}
//             <Text mt="4" fontSize="md" color="gray.600">
//               {product.description}
//             </Text>

//             {/* Say Artırma/Azaltma */}
//             <Flex align="center" mt="4">
//               <IconButton
//                 icon={<MinusIcon />}
//                 onClick={() => handleQuantityChange("decrease")}
//                 aria-label="Decrease quantity"
//               />
//               <Input
//                 value={quantity}
//                 readOnly
//                 textAlign="center"
//                 w="50px"
//                 mx="2"
//               />
//               <IconButton
//                 icon={<AddIcon />}
//                 onClick={() => handleQuantityChange("increase")}
//                 aria-label="Increase quantity"
//               />
//             </Flex>

//             {/* Ölçü Seçimi */}
//             <Stack direction="row" spacing="4" mt="4" align="center">
//               <Select placeholder="Size" maxW="100px" onChange={(e) => handleSizeChange(e.target.value)}>
//                 <option value="XS">XS</option>
//                 <option value="L">L</option>
//                 <option value="XL">XL</option>
//               </Select>
//             </Stack>

//             {/* Rəng Seçimi */}
//             <RadioGroup
//               onChange={handleColorChange}
//               value={selectedColor}
//               mt="4"
//             >
//               <Stack direction="row" spacing="4">
//                 {product.colors.map((color) => (
//                   <Radio
//                     key={color}
//                     value={color}
//                     colorScheme={color}
//                     size="lg"
//                   >
//                     {color}
//                   </Radio>
//                 ))}
//               </Stack>
//             </RadioGroup>

//             {/* Səbətə əlavə et və Müqayisə */}
//             <Stack direction="row" spacing="4" mt="6">
//               <Button colorScheme="teal" bg="white" border="1px solid teal" onClick={handleAddToCart}>
//                 Add To Cart
//               </Button>
//               <Button variant="outline" colorScheme="teal">
//                 Compare
//               </Button>
//             </Stack>

//             {/* SKU, Kategoriya və Tag */}
//             <Stack direction="row" spacing="4" mt="4">
//               <Text>SKU: {product.sku}</Text>
//               <Text>Category: {product.category}</Text>
//             </Stack>

//             {/* Taglar */}
//             <HStack spacing="4" mt="4">
//               {product.tags.map((tag, index) => (
//                 <Button key={index} variant="outline" colorScheme="teal" size="sm">
//                   {tag}
//                 </Button>
//               ))}
//             </HStack>
//           </Box>
//         </Flex>
//       </Flex>

//       {/* Modal: Məhsul səbətə əlavə olunduğu zaman açılır */}
//       <Modal isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Cart</ModalHeader>
//           <ModalBody>
//             <VStack>
//               {cart.map((item) => (
//                 <Flex key={item.id} justify="space-between" w="100%">
//                   <Text>{item.title}</Text>
//                   <Button colorScheme="red" size="sm" onClick={() => handleRemoveFromCart(item.id)}>
//                     Remove
//                   </Button>
//                 </Flex>
//               ))}
//             </VStack>
//           </ModalBody>
//           <ModalFooter>
//             <Button onClick={onClose}>Close</Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </Box>
//   );
// };

// export default ProductAbout;

// const data = [
//   {
//     id: "1",
//     name: "Məhsul 1",
//     price: 150.0,
//     description: "Bu, məhsul 1-in ətraflı təsviridir.",
//     rating: 4,
//     images: [
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+1+Şəkil+1" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+1+Şəkil+2" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+1+Şəkil+3" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+1+Şəkil+4" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+1+Şəkil+5" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+1+Şəkil+6" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+1+Şəkil+7" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+1+Şəkil+8" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+1+Şəkil+9" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+1+Şəkil+10" },
//     ],
//     colors: [
//       { name: "Qırmızı", hex: "#FF0000" },
//       { name: "Yaşıl", hex: "#00FF00" },
//       { name: "Mavi", hex: "#0000FF" },
//     ],
//     size: ["M", "L", "XL"],
//   },
//   {
//     id: "2",
//     name: "Məhsul 2",
//     price: 200.0,
//     description: "Bu, məhsul 2-in ətraflı təsviridir.",
//     rating: 5,
//     images: [
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+2+Şəkil+1" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+2+Şəkil+2" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+2+Şəkil+3" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+2+Şəkil+4" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+2+Şəkil+5" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+2+Şəkil+6" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+2+Şəkil+7" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+2+Şəkil+8" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+2+Şəkil+9" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+2+Şəkil+10" },
//     ],
//     colors: [
//       { name: "Mavi", hex: "#0000FF" },
//       { name: "Ağ", hex: "#FFFFFF" },
//       { name: "Sarı", hex: "#FFFF00" },
//     ],
//     size: ["S", "M", "L", "XL"],
//   },
//   {
//     id: "3",
//     name: "Məhsul 3",
//     price: 250.0,
//     description: "Bu, məhsul 3-in ətraflı təsviridir.",
//     rating: 3,
//     images: [
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+3+Şəkil+1" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+3+Şəkil+2" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+3+Şəkil+3" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+3+Şəkil+4" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+3+Şəkil+5" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+3+Şəkil+6" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+3+Şəkil+7" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+3+Şəkil+8" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+3+Şəkil+9" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+3+Şəkil+10" },
//     ],
//     colors: [
//       { name: "Qara", hex: "#000000" },
//       { name: "Qırmızı", hex: "#FF0000" },
//       { name: "Mavi", hex: "#0000FF" },
//     ],
//     size: ["L", "XL", "XXL"],
//   },
//   {
//     id: "4",
//     name: "Məhsul 4",
//     price: 300.0,
//     description: "Bu, məhsul 4-in ətraflı təsviridir.",
//     rating: 4,
//     images: [
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+4+Şəkil+1" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+4+Şəkil+2" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+4+Şəkil+3" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+4+Şəkil+4" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+4+Şəkil+5" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+4+Şəkil+6" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+4+Şəkil+7" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+4+Şəkil+8" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+4+Şəkil+9" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+4+Şəkil+10" },
//     ],
//     colors: [
//       { name: "Yaşıl", hex: "#00FF00" },
//       { name: "Mavi", hex: "#0000FF" },
//       { name: "Sarı", hex: "#FFFF00" },
//     ],
//     size: ["S", "M"],
//   },
//   {
//     id: "5",

//     name: "Məhsul 5",
//     price: 175.0,
//     description: "Bu, məhsul 5-in ətraflı təsviridir.",
//     rating: 2,
//     images: [
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+5+Şəkil+1" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+5+Şəkil+2" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+5+Şəkil+3" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+5+Şəkil+4" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+5+Şəkil+5" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+5+Şəkil+6" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+5+Şəkil+7" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+5+Şəkil+8" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+5+Şəkil+9" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+5+Şəkil+10" },
//     ],
//     colors: [
//       { name: "Qara", hex: "#000000" },
//       { name: "Ağ", hex: "#FFFFFF" },
//       { name: "Mavi", hex: "#0000FF" },
//     ],
//     size: ["M", "S", "L"],
//   },
//   {
//     id: "6",

//     name: "Məhsul 6",
//     price: 125.0,
//     description: "Bu, məhsul 6-in ətraflı təsviridir.",
//     rating: 4,
//     images: [
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+6+Şəkil+1" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+6+Şəkil+2" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+6+Şəkil+3" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+6+Şəkil+4" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+6+Şəkil+5" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+6+Şəkil+6" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+6+Şəkil+7" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+6+Şəkil+8" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+6+Şəkil+9" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+6+Şəkil+10" },
//     ],
//     colors: [
//       { name: "Sarı", hex: "#FFFF00" },
//       { name: "Yaşıl", hex: "#00FF00" },
//       { name: "Mavi", hex: "#0000FF" },
//     ],
//     size: ["S", "M"],
//   },
//   {
//     id: "7",

//     name: "Məhsul 7",
//     price: 275.0,
//     description: "Bu, məhsul 7-in ətraflı təsviridir.",
//     rating: 5,
//     images: [
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+7+Şəkil+1" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+7+Şəkil+2" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+7+Şəkil+3" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+7+Şəkil+4" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+7+Şəkil+5" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+7+Şəkil+6" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+7+Şəkil+7" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+7+Şəkil+8" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+7+Şəkil+9" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+7+Şəkil+10" },
//     ],
//     colors: [
//       { name: "Qırmızı", hex: "#FF0000" },
//       { name: "Sarı", hex: "#FFFF00" },
//       { name: "Mavi", hex: "#0000FF" },
//     ],
//     size: ["M", "L", "XL"],
//   },
//   {
//     id: "8",

//     name: "Məhsul 8",
//     price: 90.0,
//     description: "Bu, məhsul 8-in ətraflı təsviridir.",
//     rating: 3,
//     images: [
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+8+Şəkil+1" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+8+Şəkil+2" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+8+Şəkil+3" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+8+Şəkil+4" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+8+Şəkil+5" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+8+Şəkil+6" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+8+Şəkil+7" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+8+Şəkil+8" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+8+Şəkil+9" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+8+Şəkil+10" },
//     ],
//     colors: [
//       { name: "Qara", hex: "#000000" },
//       { name: "Ağ", hex: "#FFFFFF" },
//       { name: "Sarı", hex: "#FFFF00" },
//     ],
//     size: ["S", "M"],
//   },
//   {
//     id: "9",
//     name: "Məhsul 9",
//     price: 50.0,
//     description: "Bu, məhsul 9-un ətraflı təsviridir.",
//     rating: 4,
//     images: [
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+9+Şəkil+1" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+9+Şəkil+2" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+9+Şəkil+3" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+9+Şəkil+4" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+9+Şəkil+5" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+9+Şəkil+6" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+9+Şəkil+7" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+9+Şəkil+8" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+9+Şəkil+9" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+9+Şəkil+10" },
//     ],
//     colors: [
//       { name: "Qırmızı", hex: "#FF0000" },
//       { name: "Yaşıl", hex: "#00FF00" },
//       { name: "Mavi", hex: "#0000FF" },
//     ],
//     size: ["M", "L", "XL"],
//   },
//   {
//     id: "10",
//     name: "Məhsul 10",
//     price: 180.0,
//     description: "Bu, məhsul 10-un ətraflı təsviridir.",
//     rating: 4,
//     images: [
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+10+Şəkil+1" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+10+Şəkil+2" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+10+Şəkil+3" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+10+Şəkil+4" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+10+Şəkil+5" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+10+Şəkil+6" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+10+Şəkil+7" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+10+Şəkil+8" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+10+Şəkil+9" },
//       { url: "https://via.placeholder.com/400x400?text=Məhsul+10+Şəkil+10" },
//     ],
//     colors: [
//       { name: "Ağ", hex: "#FFFFFF" },
//       { name: "Qırmızı", hex: "#FF0000" },
//       { name: "Sarı", hex: "#FFFF00" },
//     ],
//     size: ["S", "M", "L"],
//   },
// ];

import React from "react";
import "./style-single product/productabout.css";

const ProductAbout = () => {
  const data = [
    {
      id: "1",
      name: "Məhsul 1",
      price: 150.0,
      description: "Bu, məhsul 1-in ətraflı təsviridir.",
      rating: 4,
      images: [
        { url: "https://via.placeholder.com/400x400?text=Məhsul+1+Şəkil+1" },
        { url: "https://via.placeholder.com/400x400?text=Məhsul+1+Şəkil+2" },
        { url: "https://via.placeholder.com/400x400?text=Məhsul+1+Şəkil+3" },
        { url: "https://via.placeholder.com/400x400?text=Məhsul+1+Şəkil+4" },
        { url: "https://via.placeholder.com/400x400?text=Məhsul+1+Şəkil+5" },
        { url: "https://via.placeholder.com/400x400?text=Məhsul+1+Şəkil+6" },
        { url: "https://via.placeholder.com/400x400?text=Məhsul+1+Şəkil+7" },
        { url: "https://via.placeholder.com/400x400?text=Məhsul+1+Şəkil+8" },
        { url: "https://via.placeholder.com/400x400?text=Məhsul+1+Şəkil+9" },
        { url: "https://via.placeholder.com/400x400?text=Məhsul+1+Şəkil+10" },
      ],
      colors: [
        { name: "Qırmızı", hex: "#FF0000" },
        { name: "Yaşıl", hex: "#00FF00" },
        { name: "Mavi", hex: "#0000FF" },
      ],
      size: ["M", "L", "XL"],
    },
  ];
  return (
    <div className="product-container">
      <div className="container">
        <div className="product-image-container">
          <div className="product-image-slider">
            {data[0].images.map((image, index) => (
              <div key={index} className="product-image-slide">
                <img src={image.url} alt={image.url} />
              </div>
            ))}
          </div>
          <div className="product-image-fon">
            <img src={data[0].images[0].url} alt="" />
          </div>
        </div>
        <div className="product-about-text">
          {data.map((item, index) => (
            <div key={index} className="product-about-item">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>Baharat: {item.rating} / 5</p>
              <p>
                Qadaqlığı: {item.colors.map((color) => color.name).join(", ")}
              </p>
              <p>Həcm: {item.size.join(", ")}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductAbout;
