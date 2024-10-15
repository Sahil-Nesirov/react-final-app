// import React from "react";
// import { Stack, Box, Text, Button } from "@chakra-ui/react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

// const data = [
//   {
//     id: 1,
//     title: "01 — Bed Room",
//     subtitle: "Inner Peace",
//     image: "https://via.placeholder.com/500x400?text=Room+1",
//   },
//   {
//     id: 2,
//     title: "02 — Living Room",
//     subtitle: "Modern Elegance",
//     image: "https://via.placeholder.com/500x400?text=Room+2",
//   },
//   {
//     id: 3,
//     title: "03 — Office",
//     subtitle: "Work Flow",
//     image: "https://via.placeholder.com/500x400?text=Room+3",
//   },
//   {
//     id: 4,
//     title: "04 — Dining Room",
//     subtitle: "Family Gathering",
//     image: "https://via.placeholder.com/500x400?text=Room+4",
//   },
//   {
//     id: 5,
//     title: "05 — Kitchen",
//     subtitle: "Culinary Haven",
//     image: "https://via.placeholder.com/500x400?text=Room+5",
//   },
//   {
//     id: 6,
//     title: "06 — Bathroom",
//     subtitle: "Relaxing Space",
//     image: "https://via.placeholder.com/500x400?text=Room+6",
//   },
// ];

// const Inspiration = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1.5, // İlk slayd tam, ikinci tam, üçüncü qismən
//     slidesToScroll: 1,
//     arrows: true,
//     centerMode: true,
//     responsive: [
//       {
//         breakpoint: 768, // Mobil versiya üçün
//         settings: {
//           slidesToShow: 1,
//           centerMode: false,
//         },
//       },
//     ],
//   };

//   const getImageHeight = (index) => {
//     // İlk slayd daha böyük olacaq
//     return index === 0 ? "500px" : index === 1 ? "400px" : "300px";
//   };

//   return (
//     <div style={{ padding: "50px" }}>
//       <Box>
//         <Stack direction={["column", "row"]} spacing="24px">
//           {/* Sol hissə: Mətn */}
//           <Box w="40%" h="auto">
//             <Stack spacing={3}>
//               <Text fontSize="4xl" fontFamily="body" fontWeight="bold">
//                 50+ Beautiful rooms <br /> inspiration
//               </Text>
//               <p style={{ color: "#616161" }}>
//                 Our designer already made a lot of beautiful <br />
//                 prototypes of rooms that inspire you
//               </p>
//               <Button
//                 size="md"
//                 height="48px"
//                 width="200px"
//                 border="2px"
//                 borderColor="green.500"
//                 background="#B88E2F"
//                 color="white"
//               >
//                 Explore More
//               </Button>
//             </Stack>
//           </Box>

//           {/* Sağ hissə: Slayder */}
//           <Box w="60%" h="auto">
//             <Slider {...settings}>
//               {data.map((item, index) => (
//                 <Box key={item.id} position="relative" textAlign="center">
//                   <img
//                     src={item.image}
//                     alt={item.subtitle}
//                     style={{
//                       width: "100%",
//                       height: getImageHeight(index), // Dinamik hündürlük
//                       objectFit: "cover",
//                       borderRadius: "10px",
//                     }}
//                   />
//                   <Box
//                     position="absolute"
//                     bottom="10px"
//                     left="10px"
//                     background="rgba(255, 255, 255, 0.7)"
//                     p={3}
//                     borderRadius="md"
//                   >
//                     <Text fontSize="md" fontWeight="bold">
//                       {item.title}
//                     </Text>
//                     <Text fontSize="lg">{item.subtitle}</Text>
//                   </Box>
//                 </Box>
//               ))}
//             </Slider>
//           </Box>
//         </Stack>
//       </Box>
//     </div>
//   );
// };

// export default Inspiration;

// import React, { useState } from "react";
// import { Stack, Box, Text, Button } from "@chakra-ui/react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

// const data = [
//   {
//     id: 1,
//     title: "01 — Bed Room",
//     subtitle: "Inner Peace",
//     image: "https://via.placeholder.com/500x400?text=Room+1",
//   },
//   {
//     id: 2,
//     title: "02 — Living Room",
//     subtitle: "Modern Elegance",
//     image: "https://via.placeholder.com/500x400?text=Room+2",
//   },
//   {
//     id: 3,
//     title: "03 — Office",
//     subtitle: "Work Flow",
//     image: "https://via.placeholder.com/500x400?text=Room+3",
//   },
//   {
//     id: 4,
//     title: "04 — Dining Room",
//     subtitle: "Family Gathering",
//     image: "https://via.placeholder.com/500x400?text=Room+4",
//   },
//   {
//     id: 5,
//     title: "05 — Kitchen",
//     subtitle: "Culinary Haven",
//     image: "https://via.placeholder.com/500x400?text=Room+5",
//   },
//   {
//     id: 6,
//     title: "06 — Bathroom",
//     subtitle: "Relaxing Space",
//     image: "https://via.placeholder.com/500x400?text=Room+6",
//   },
// ];

// const Inspiration = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1, // Bir anda bir şəkil görünəcək
//     slidesToScroll: 1,
//     arrows: false,
//   };

//   const handleDotClick = (index) => {
//     setCurrentIndex(index);
//   };

//   return (
//     <div style={{ padding: "50px" }}>
//       <Box>
//         <Stack direction={["column", "row"]} spacing="24px">
//           {/* Sol hissə: Mətn */}
//           <Box w="40%" h="auto">
//             <Stack spacing={3}>
//               <Text fontSize="4xl" fontFamily="body" fontWeight="bold">
//                 50+ Beautiful rooms <br /> inspiration
//               </Text>
//               <p style={{ color: "#616161" }}>
//                 Our designer already made a lot of beautiful <br />
//                 prototypes of rooms that inspire you
//               </p>
//               <Button
//                 size="md"
//                 height="48px"
//                 width="200px"
//                 border="2px"
//                 borderColor="green.500"
//                 background="#B88E2F"
//                 color="white"
//               >
//                 Explore More
//               </Button>
//             </Stack>
//           </Box>

//           {/* Sağ hissə: Qutular */}
//           <Box w="60%" h="auto">
//             <Stack spacing={4}>
//               <Box
//                 w="100%"
//                 h="500px"
//                 position="relative"
//                 overflow="hidden"
//                 borderRadius="10px"
//               >
//                 <img
//                   src={data[currentIndex % data.length].image}
//                   alt={data[currentIndex % data.length].subtitle}
//                   style={{
//                     width: "100%",
//                     height: "100%",
//                     objectFit: "cover",
//                     borderRadius: "10px",
//                   }}
//                 />
//                 <Box
//                   position="absolute"
//                   bottom="10px"
//                   left="10px"
//                   background="rgba(255, 255, 255, 0.7)"
//                   p={3}
//                   borderRadius="md"
//                 >
//                   <Text fontSize="md" fontWeight="bold">
//                     {data[currentIndex % data.length].title}
//                   </Text>
//                   <Text fontSize="lg">
//                     {data[currentIndex % data.length].subtitle}
//                   </Text>
//                 </Box>
//               </Box>

//               <Stack direction="row" spacing={4}>
//                 <Box
//                   w="50%"
//                   h="400px"
//                   position="relative"
//                   overflow="hidden"
//                   borderRadius="10px"
//                 >
//                   <img
//                     src={data[(currentIndex + 1) % data.length].image}
//                     alt={data[(currentIndex + 1) % data.length].subtitle}
//                     style={{
//                       width: "100%",
//                       height: "100%",
//                       objectFit: "cover",
//                       borderRadius: "10px",
//                     }}
//                   />
//                   <Box
//                     position="absolute"
//                     bottom="10px"
//                     left="10px"
//                     background="rgba(255, 255, 255, 0.7)"
//                     p={3}
//                     borderRadius="md"
//                   >
//                     <Text fontSize="md" fontWeight="bold">
//                       {data[(currentIndex + 1) % data.length].title}
//                     </Text>
//                     <Text fontSize="lg">
//                       {data[(currentIndex + 1) % data.length].subtitle}
//                     </Text>
//                   </Box>
//                 </Box>

//                 <Box
//                   w="50%"
//                   h="200px"
//                   position="relative"
//                   overflow="hidden"
//                   borderRadius="10px"
//                 >
//                   <img
//                     src={data[(currentIndex + 2) % data.length].image}
//                     alt={data[(currentIndex + 2) % data.length].subtitle}
//                     style={{
//                       width: "100%",
//                       height: "100%",
//                       objectFit: "cover",
//                       borderRadius: "10px",
//                     }}
//                   />
//                   <Box
//                     position="absolute"
//                     bottom="10px"
//                     left="10px"
//                     background="rgba(255, 255, 255, 0.7)"
//                     p={3}
//                     borderRadius="md"
//                   >
//                     <Text fontSize="md" fontWeight="bold">
//                       {data[(currentIndex + 2) % data.length].title}
//                     </Text>
//                     <Text fontSize="lg">
//                       {data[(currentIndex + 2) % data.length].subtitle}
//                     </Text>
//                   </Box>
//                 </Box>
//               </Stack>

//               {/* Yumru düymələr */}
//               <Stack direction="row" spacing={2} justifyContent="center">
//                 {data.map((_, index) => (
//                   <Button
//                     key={index}
//                     onClick={() => handleDotClick(index)}
//                     borderRadius="50%"
//                     width="40px"
//                     height="40px"
//                     background={currentIndex === index ? "#B88E2F" : "#ddd"}
//                   />
//                 ))}
//               </Stack>
//             </Stack>
//           </Box>
//         </Stack>
//       </Box>
//     </div>
//   );
// };

// export default Inspiration;


// Inspiration.jsx
import React, { useState } from "react";
import { Stack, Box, Text, Button } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
import img1 from "../../assets/images/home/inspirations/50+ Beautiful rooms/25a06a33769af9bf5fe8f8ed81ce75d8.png"
import img2 from "../../assets/images/home/inspirations/50+ Beautiful rooms/4961c3801f4c07439f27b13468e5e545.png"
import img3 from "../../assets/images/home/inspirations/50+ Beautiful rooms/d1b18b523420e79dda1e92951ecde49b.png"
const data = [
  {
    id: 1,
    title: "01 — Bed Room",
    subtitle: "Inner Peace",
    image: img1,
  },
  {
    id: 2,
    title: "02 — Living Room",
    subtitle: "Modern Elegance",
    image: img2,
  },
  {
    id: 3,
    title: "03 — Office",
    subtitle: "Work Flow",
    image: img3,
  },
  {
    id: 4,
    title: "04 — Dining Room",
    subtitle: "Family Gathering",
    image: img2,
  },
  {
    id: 5,
    title: "05 — Kitchen",
    subtitle: "Culinary Haven",
    image: img3,
  },
  {
    id: 6,
    title: "06 — Bathroom",
    subtitle: "Relaxing Space",
    image: img1,
  },
];

const Inspiration = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Bir anda bir şəkil görünəcək
    slidesToScroll: 1,
    arrows: false,
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div style={{ padding: "50px", backgroundColor: "#FAF3EA" }}>
      <Box>
        <Stack direction={["column", "row"]} spacing="24px">
          {/* Sol hissə: Mətn */}
          <Box w="40%" h="auto" display="flex" alignItems="center" justifyContent="center">
            <Stack spacing={3}>
              <Text fontSize="4xl" fontFamily="body" fontWeight="bold">
                50+ Beautiful rooms <br /> inspiration
              </Text>
              <p style={{ color: "#616161" }}>
                Our designer already made a lot of beautiful <br />
                prototypes of rooms that inspire you
              </p>
              <Button
                size="md"
                height="48px"
                width="200px"
                border="2px"
                borderColor="green.500"
                background="#B88E2F"
                color="white"
              >
                Explore More
              </Button>
            </Stack>
          </Box>

          {/* Sağ hissə: Qutular */}
          <Box w="60%" h="auto">
            <Stack spacing={4}>
              <Stack direction="row" spacing={4}>
                <Box
                  w="50%" // Birinci qutu
                  h="500px"
                  position="relative"
                  overflow="hidden"
                  borderRadius="10px"
                >
                  <img
                    src={data[(currentIndex + 1) % data.length].image}
                    alt={data[(currentIndex + 1) % data.length].subtitle}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                  <Box
                    position="absolute"
                    bottom="10px"
                    left="10px"
                    background="rgba(255, 255, 255, 0.7)"
                    p={3}
                    borderRadius="md"
                  >
                    <Text fontSize="md" fontWeight="bold">
                      {data[(currentIndex + 1) % data.length].title}
                    </Text>
                    <Text fontSize="lg">
                      {data[(currentIndex + 1) % data.length].subtitle}
                    </Text>
                  </Box>
                </Box>

                <Box
                  w="50%" // İkinci qutu
                  h="400px"
                  position="relative"
                  overflow="hidden"
                  borderRadius="10px"
                >
                  <img
                    src={data[(currentIndex + 2) % data.length].image}
                    alt={data[(currentIndex + 2) % data.length].subtitle}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                  <Box
                    position="absolute"
                    bottom="10px"
                    left="10px"
                    background="rgba(255, 255, 255, 0.7)"
                    p={3}
                    borderRadius="md"
                  >
                    <Text fontSize="md" fontWeight="bold">
                      {data[(currentIndex + 2) % data.length].title}
                    </Text>
                    <Text fontSize="lg">
                      {data[(currentIndex + 2) % data.length].subtitle}
                    </Text>
                  </Box>
                </Box>

                <Box
                  w="25%" // Üçüncü qutu, yarısı görünəcək
                  h="400px"
                  position="relative"
                  overflow="hidden"
                  borderRadius="10px"
                >
                  <img
                    src={data[(currentIndex + 3) % data.length].image}
                    alt={data[(currentIndex + 3) % data.length].subtitle}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                  <Box
                    position="absolute"
                    bottom="10px"
                    left="10px"
                    background="rgba(255, 255, 255, 0.7)"
                    p={3}
                    borderRadius="md"
                  >
                    <Text fontSize="md" fontWeight="bold">
                      {data[(currentIndex + 3) % data.length].title}
                    </Text>
                    <Text fontSize="lg">
                      {data[(currentIndex + 3) % data.length].subtitle}
                    </Text>
                  </Box>
                </Box>
              </Stack>

              {/* Yumru düymələr */}
              <Stack direction="row" spacing={2} justifyContent="center">
                {data.map((_, index) => (
                  <Button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    borderRadius="10%"
                    width="10px"
                    height="10px"
                    background={currentIndex === index ? "#B88E2F" : "#ddd"}
                  />
                ))}
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </div>
  );
};

export default Inspiration;
