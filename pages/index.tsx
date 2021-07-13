import { Box, Stack, Text, useColorModeValue, Heading } from "@chakra-ui/react";
import Navbar from "components/Navbar";
import { HTMLMotionProps, motion } from "framer-motion";

const Home = () => {
  const mode = useColorModeValue("solarizedDark.600", "solarizedLight.500");
  const bgMode = useColorModeValue("solarizedLight.700", "solarizedDark.500");
  return (
    <Box
      maxW={{ base: "90%", lg: "65%" }}
      mx="auto"
      px={{ base: "6", lg: "8" }}
      align="center"
    >
      <Navbar />
      <Heading color={mode} textAlign="left" size="4xl" mt="2rem">
        <Text>Hi, I'm Ethan</Text>
      </Heading>
      <Heading color={mode} textAlign="left" size="xl">
        <Text>You don't know me yet but you will soon</Text>
      </Heading>
      <Heading color={mode} textAlign="center" size="2xl" mt="5rem">
        <Text>My Testimonials</Text>
      </Heading>
      <Stack
        align={"center"}
        justifyContent={"space-between"}
        direction={{ base: "column", md: "row" }}
        spacing="3em"
        color={mode}
        my={5}
      >
        <Stack
          dir={"column"}
          rounded={"xl"}
          bg={bgMode}
          p={6}
          h={{ base: "12rem", sm: "20rem" }}
          w={{ base: "100%", sm: "30rem" }}
        >
          <Text fontSize={{ base: "xl", md: "2xl" }}>
            He's the hardest working and most diligent person I've ever met.
            Definitely my favorite child.
          </Text>
          <Text>- My Mom (probably(not))</Text>
        </Stack>
        <Stack
          dir={"column"}
          rounded={"xl"}
          bg={bgMode}
          p={6}
          h={{ base: "12rem", sm: "20rem" }}
          w={{ base: "100%", sm: "30rem" }}
        >
          <Text fontSize={{ base: "xl", md: "2xl" }}>
            Honestly, I've never met anyone funnier. His memes are top notch and
            he's always quick with a joke
          </Text>
          <Text>- My best friend (definitely)</Text>
        </Stack>
        <Stack
          dir={"column"}
          rounded={"xl"}
          bg={bgMode}
          p={6}
          h={{ base: "12rem", sm: "20rem" }}
          w={{ base: "100%", sm: "30rem" }}
        >
          <Text fontSize={{ base: "xl", md: "2xl" }}>
            I literally just met you. I know absolutely nothing about you.
          </Text>
          <Text>- Some random guy I met at McDonalds</Text>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Home;
