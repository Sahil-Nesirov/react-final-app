import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBrowsetherange } from "../../features/browsetherangeSlice";
import { Box, Image, Text } from "@chakra-ui/react";

const BrowseTheRange = () => {
  const dispatch = useDispatch();
  const browsetherange = useSelector((state) => state.browseTheRange.browsetherange || []);
  const browsetherangeStatus = useSelector((state) => state.browseTheRange.status);
  const error = useSelector((state) => state.browseTheRange.error);

  useEffect(() => {
    if (browsetherangeStatus === "idle") {
      dispatch(fetchBrowsetherange());
    }

    if (browsetherangeStatus === "succeeded") {
      console.log("Gələn data:", browsetherange);
    }
  }, [browsetherangeStatus, dispatch]);

  let content;

  if (browsetherangeStatus === "loading") {
    content = <Text>Loading...</Text>;
  } else if (browsetherangeStatus === "succeeded") {
    content = (
      <div className="browsetherange-container">
        <Box borderRadius="lg" p={4} bg="white" textAlign="center">
          <Text fontSize="2xl" fontWeight="bold" color="#333333">
            Browse The Range
          </Text>
          <Text fontSize="md" color="#666666">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </Box>
        <Box mt={4} textAlign="center" display="flex" justifyContent="center" mb={6}>
          {browsetherange.map((item) => (
            <Box width="381px" height="480px" mx="auto" key={item.id}>
              <Image
                src={item.image_path}
                alt={item.name}
                boxSize="100%"
                objectFit="cover"
                borderRadius="xl"
              />
              <Text mt={2} fontSize="lg" fontWeight="bold">
                {item.name}
              </Text>
            </Box>
          ))}
        </Box>
      </div>
    );
  } else if (browsetherangeStatus === "failed") {
    content = <Text>Error: {error}</Text>;
  }

  return <div>{content}</div>;
};

export default BrowseTheRange;


