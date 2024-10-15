import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogos } from "../../features/logoSlice";
import { Box, Image, Text } from "@chakra-ui/react";

const Logo = () => {
  const dispatch = useDispatch();
  const logos = useSelector((state) => state.logos.logos);
  const logoStatus = useSelector((state) => state.logos.status);
  const error = useSelector((state) => state.logos.error);

  useEffect(() => {
    if (logoStatus === "idle") {
      dispatch(fetchLogos());
    }
  }, [logoStatus, dispatch]);

  let content;

  if (logoStatus === "loading") {
    content = <p>Loading...</p>;
  } else if (logoStatus === "succeeded") {
    content = (
      <>
        {logos.map((logo) => (
          <>
          <Box display="flex" backgroundColor="red.400" alignContent="center">
            <Image
              src={`http://localhost:8000/storage/images/home/banner/logo/${logo.logo_path}`}
              alt="Furniro Logo"
              boxSize="50px"
            />

            <Text fontSize="2xl" fontWeight="bold" ml="2">
              {logo.name}
            </Text>
          </Box>
          </>
        ))}
      </>
    );
  } else if (logoStatus === "failed") {
    content = <p>{error}</p>;
  }

  return <div>{content}</div>;
};

export default Logo;
