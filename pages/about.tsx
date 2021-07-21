import AboutPage from "components/Pages/AboutPage";
import Head from "components/Head";
import { Box } from "@chakra-ui/react";

const About = () => {
  return (
    <Box>
      <Head title="About Me" />
      <AboutPage />
    </Box>
  );
};

export default About;
