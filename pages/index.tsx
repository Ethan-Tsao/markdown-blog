import {
  Box,
  Stack,
  useColorModeValue,
  Heading,
  SimpleGrid,
  Divider,
  Image,
  AspectRatio,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import Testimonial from "components/Testimonial";
import Layout from "components/Layout";

export const MotionChevron = motion(ChevronDownIcon);

const Home = () => {
  const mode = useColorModeValue("solarizedDark.600", "solarizedLight.500");
  const bgMode = useColorModeValue("solarizedLight.700", "solarizedDark.500");
  return (
    <Layout metadata="Home">
      {/* Heading */}
      <SimpleGrid columns={{ base: 1, xl: 2 }} mt="4rem">
        <Box align="center" maxH="50%">
          <Heading textAlign="left" size="4xl">
            Hi, I&apos;m Ethan
          </Heading>
          <Heading textAlign="left" size="xl">
            You don&apos;t know me yet but you will soon
          </Heading>
        </Box>
        <Box my={{ base: "1rem" }}>
          <AspectRatio
            ratio={3 / 4}
            maxW={{ base: "80%", sm: "60%", md: "50%", xl: "90%" }}
            padding="1"
          >
            <Image
              src="images/home/me.jpg"
              objectFit="cover"
              alt="that's me :)"
              rounded="2xl"
              boxShadow="dark-lg"
            />
          </AspectRatio>
        </Box>
      </SimpleGrid>
      <Box justifyItems="center">
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

      <Divider mt={5} />

      <Box h="100vh">
        <Heading textAlign="center" size="2xl" my="2rem">
          My Testimonials
        </Heading>
        <Stack
          align={"center"}
          justifyContent={{ base: "center", xl: "space-between" }}
          justify="center"
          direction={{ base: "column", md: "row" }}
          spacing={{ base: "1", md: "3em" }}
          my={5}
          w="100%"
        >
          <Testimonial
            body="He's the hardest working and most diligent person I've
              ever met. Definitely my favorite child."
            credit="My Mom (probably(not))"
          />
          <Testimonial
            body="Honestly, I've never met anyone funnier. His memes are top
              notch and he's always quick with a joke"
            credit="My best friend (definitely)"
          />
          <Testimonial
            body="Who the hell are you?"
            credit="Some random guy I met at McDonalds"
          />
        </Stack>
      </Box>
    </Layout>
  );
};

export default Home;
