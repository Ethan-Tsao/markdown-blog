import React from "react";
import { Image, Text, HStack, useColorModeValue } from "@chakra-ui/react";

export interface BlogAuthorProps {
  date: Date;
  name: string;
}

export const BlogAuthor: React.FC<BlogAuthorProps> = (props) => {
  const mode = useColorModeValue("solarizedDark.600", "solarizedLight.400");

  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium" color={mode}>
        {props.name}
      </Text>
      <Text color={mode}>—</Text>
      <Text color={mode}>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};
