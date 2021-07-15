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
  Image,
  AspectRatio,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Navbar from "components/Navbar";
import { HTMLMotionProps, motion } from "framer-motion";

export const MotionChevron = motion(ChevronDownIcon);

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
      <Navbar />
      {/* Heading */}
      <SimpleGrid columns={{ base: 1, xl: 2 }} h="80vh" mt="2rem">
        <Box align="center" maxH="50%">
          <Heading textAlign="left" size="4xl">
            Hi, I&apos;m Ethan
          </Heading>
          <Heading textAlign="left" size="xl">
            You don&apos;t know me yet but you will soon
          </Heading>
        </Box>
        <Box>
          <AspectRatio
            ratio={3 / 4}
            maxW={{ base: "80%", sm: "50%", xl: "90%" }}
          >
            <Image
              src="images/home/me.jpg"
              objectFit="cover"
              alt="that's me :)"
            />
          </AspectRatio>
        </Box>
      </SimpleGrid>
      <Box justifyItems="center" h="20vh">
        <MotionChevron
          h="10"
          w="10"
          animate={{
            y: [-10, 10, -10],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
          }}
        />
      </Box>

      <Divider />

      {/* Testimonials */}
      <Box h="100vh">
        <Heading textAlign="center" size="2xl" my="2rem">
          My Testimonials
        </Heading>
        <Stack
          align={"center"}
          justifyContent={{ base: "center", xl: "space-between" }}
          justify="center"
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
            <Text py={"1rem"}>- My Mom (probably(not))</Text>
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
            <Text py={"1rem"}>- My best friend (definitely)</Text>
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
            <Text py={"1rem"}>- Some random guy I met at McDonalds</Text>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default Home;
