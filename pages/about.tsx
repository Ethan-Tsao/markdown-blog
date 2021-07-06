import {
  Box,
  Stack,
  Heading,
  Text,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import Navbar from "components/Navbar";
import Typed from "react-typed";

const About = () => {
  const mode = useColorModeValue("solarizedDark.600", "solarizedLight.500");
  const typedStrings = [
    "SOFTWARE ENGINEER",
    "CLOUD ENGINEER",
    "WEB DEVELOPER",
    "GAMER",
    "MECHANICAL KEYBOARD ENTHUSIAST",
    "NERD",
  ];
  return (
    <div>
      <Box
        maxW={{ base: "90%", lg: "65%" }}
        mx="auto"
        px={{ base: "6", lg: "8" }}
        align="center"
        color={mode}
      >
        <Navbar />
        <Stack
          //   align={"center"}
          //   spacing={{ base: 8, md: 10 }}
          py={{ base: 15, md: 20 }}
          direction={{ base: "column", md: "row" }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }} align={"center"}>
            <Box>
              <Image src="images/about/img1.jpg" />
            </Box>
            <Heading size="2xl">
              <Text>Ethan Tsao</Text>
            </Heading>
            <Heading>
              <Text>My name is Ethan</Text>
            </Heading>
          </Stack>
          <Stack flex={1} align={"flex-start"}>
            <Heading textAlign="left" size={"md"} lineHeight={"1.5"}>
              Thanks for visiting my website! I'm Ethan, a 24 year old
              half-Chinese, half-Korean dude that was born and raised in Texas.
              I went to LMU, a private school in LA, and studied electrical
              engineering and I am currently a software engineer at AT&T But
              that's what I am, not who I am. I am a{" "}
              <Typed
                strings={typedStrings}
                typeSpeed={30}
                backSpeed={30}
                backDelay={300}
                loop
                showCursor
                cursorChar="|"
              />
            </Heading>
          </Stack>
        </Stack>
      </Box>
    </div>
  );
};

export default About;
