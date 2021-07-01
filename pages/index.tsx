import { Box } from "@chakra-ui/react";
import Navbar from "components/Navbar";

const Home = () => {
  return (
    <Box
      maxW={{ base: "90%", lg: "65%" }}
      mx="auto"
      px={{ base: "6", lg: "8" }}
      align="center"
    >
      <Navbar />
    </Box>
  );
};

export default Home;
