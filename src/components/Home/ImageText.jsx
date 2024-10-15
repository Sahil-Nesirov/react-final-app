import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArxafon } from "../../features/arxafonSlice";
import { Box, Image, Text, Button } from "@chakra-ui/react";

const ImageText = () => {
  const dispatch = useDispatch();
  const arxafon = useSelector((state) => state.arxafons.arxafons);
  const arxafonStatus = useSelector((state) => state.arxafons.status);
  const error = useSelector((state) => state.arxafons.error);

  useEffect(() => {
    if (arxafonStatus === "idle") {
      dispatch(fetchArxafon());
    }
  }, [dispatch, arxafonStatus]);

  let content;

  if (arxafonStatus === "loading") {
    content = <p>Loading...</p>;
  } else if (arxafonStatus === "successed") {
    content = (
      <Box position="relative" width="100%" height="100vh">
        {arxafon.map((item) => (
          <Box key={item.id} className="bg-images-fon" width="100%" height="100%">
            <Image
              src={item.image_path}
              alt={item.name}
              objectFit="cover"
              width="100%"
              height="100%"
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
            />
            <Box
              className="images-text"
              position="absolute"
              top="50%"
              right="5%"
              transform="translateY(-50%)"
              zIndex="1"
              textAlign="left"
              p={8}
              bg="#FFF3E3"
              borderRadius="md"
              width="45%"
            >
              <Text fontSize="lg" fontWeight="bold" color="#333333">
                {item.name}
              </Text>
              <Text fontSize="5xl" fontWeight="bold" color="#B88E2F" my={2}>
                {item.title}
              </Text>
              <Text color="#333333" mb={4}>
                {item.description}
              </Text>
              <Button
                size="md"
                height="48px"
                width="150px"
                background="#B88E2F"
                color="white"
              >
                Buy Now
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    );
  } else if (arxafonStatus === "failed") {
    content = <p>Error: {error}</p>;
  }

  return <div>{content}</div>;
};

export default ImageText;
