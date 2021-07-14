import {
  Box,
  Stack,
  Text,
  useColorModeValue,
  Heading,
  SimpleGrid,
  Divider,
  LinkBox,
  LinkOverlay,
  Flex,
} from "@chakra-ui/react";
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
      color={mode}
    >
      {/* Heading */}
      <Navbar />
      <Box alignContent="center">
        <Heading textAlign="left" size="4xl" mt="5rem">
          Hi, I&apos;m Ethan
        </Heading>
        <Heading textAlign="left" size="xl">
          You don&apos;t know me yet but you will soon
        </Heading>
      </Box>

      {/* <Divider /> */}

      {/* Testimonials */}
      <Heading textAlign="center" size="2xl" mt="5rem">
        My Testimonials
      </Heading>
      <Stack
        align={"center"}
        justifyContent={"space-between"}
        direction={{ base: "column", md: "row" }}
        spacing="3em"
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
            He&apos;s the hardest working and most diligent person I&apos;ve
            ever met. Definitely my favorite child.
          </Text>
          <Text py={"2rem"}>- My Mom (probably(not))</Text>
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
            Honestly, I&apos;ve never met anyone funnier. His memes are top
            notch and he&apos;s always quick with a joke
          </Text>
          <Text py={"2rem"}>- My best friend (definitely)</Text>
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
            Who the hell are you?
          </Text>
          <Text py={"2rem"}>- Some random guy I met at McDonalds</Text>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Home;
