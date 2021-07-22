import {
  Stack,
  Heading,
  Image,
  useColorModeValue,
  IconButton,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import { FaYoutube, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import Typed from "react-typed";
import Layout from "components/Layout";

const AboutPage = () => {
  const typedStrings = [
    "SOFTWARE ENGINEER",
    "CLOUD ENGINEER",
    "WEB DEVELOPER",
    "GAMER",
    "MECHANICAL KEYBOARD ENTHUSIAST",
    "NERD",
  ];
  return (
    <Stack
      spacing={{ base: 8, md: 10 }}
      py={{ base: 15, md: 20 }}
      direction={{ base: "column", md: "row" }}
    >
      <Stack flex={1} spacing={{ base: 5, md: 10 }} align={"center"} mb={3}>
        <Image
          src="images/about/me.jpg"
          rounded="100%"
          alt="picture of me :)"
        />
        <Heading size="2xl">Ethan Tsao</Heading>
        <Stack direction={"row"} spacing={10}>
          <LinkBox>
            <LinkOverlay href="https://www.youtube.com/channel/UCOREnmPcCxJBGjsdko-6-YA">
              <IconButton
                aria-label="Youtube Link"
                icon={<FaYoutube />}
                variant="transparent"
                fontSize="3xl"
              />
            </LinkOverlay>
          </LinkBox>

          <LinkBox>
            <LinkOverlay href="https://www.linkedin.com/in/ethantsao/">
              <IconButton
                aria-label="LinkedIn Link"
                icon={<FaLinkedin />}
                variant="transparent"
                fontSize="3xl"
              />
            </LinkOverlay>
          </LinkBox>

          <LinkBox>
            <LinkOverlay href="https://www.instagram.com/ethan_not_aight/">
              <IconButton
                aria-label="Instagram Link"
                icon={<FaInstagram />}
                variant="transparent"
                fontSize="3xl"
              />
            </LinkOverlay>
          </LinkBox>

          <LinkBox>
            <LinkOverlay href="https://twitter.com/ethan_aight">
              <IconButton
                aria-label="Twitter Link"
                icon={<FaTwitter />}
                variant="transparent"
                fontSize="3xl"
              />
            </LinkOverlay>
          </LinkBox>
        </Stack>
      </Stack>
      <Stack flex={1} align={"flex-start"}>
        <Heading textAlign="left" size={"md"} lineHeight={"1.5"} mt={"3vh"}>
          Thanks for visiting my website! I&apos;m Ethan, a 24 year old
          half-Chinese, half-Korean dude that was born and raised in Texas. I
          went to LMU, a private school in LA, and studied electrical
          engineering and I am currently a software engineer at AT&T But
          that&apos;s what I am, not who I am. I am a{" "}
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
  );
};

export default AboutPage;
