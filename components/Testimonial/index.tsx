import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";

interface Props {
  body: string;
  credit: string;
}

const Testimonial = ({ body, credit }: Props) => {
  const bgMode = useColorModeValue("solarizedLight.400", "solarizedDark.500");
  const mode = useColorModeValue("solarizedDark.600", "solarizedLight.400");
  return (
    <Box py={6} color={mode} w={"full"}>
      <Center
        bg={bgMode}
        boxShadow="dark-lg"
        rounded={"lg"}
        p={6}
        minH={{ md: "lg", lg: "2xl", xl: "xs" }}
        textAlign="center"
        align="center"
      >
        <Box>
          <Text fontSize={"2xl"} mb="1rem" fontWeight="semibold">
            {body}
          </Text>
          <Text fontSize={"lg"}>- {credit}</Text>
        </Box>
      </Center>
    </Box>
  );
};

export default Testimonial;
