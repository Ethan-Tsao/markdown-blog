import React from "react";
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  HStack,
  Tag,
  useColorModeValue,
  Container,
  LinkBox,
  LinkOverlay,
  Flex,
} from "@chakra-ui/react";
import { BlogAuthor } from "./BlogAuthor";

interface Frontmatter {
  title: string;
  date: string;
  cover_image: string;
  excerpt: string;
}

interface IPost {
  frontmatter: Frontmatter;
  slug: string;
}

interface IIPost {
  post: IPost;
}

const BlogCard: React.FC<IIPost> = ({ post }: IIPost) => {
  const bgMode = useColorModeValue("solarizedLight.400", "solarizedDark.600");
  const mode = useColorModeValue("solarizedDark.600", "solarizedLight.400");

  return (
    <Box
      marginTop={{ base: "1", sm: "5" }}
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      justifyContent="center"
      rounded={12}
      boxShadow="2xl"
      paddingBottom={{ base: "1", sm: "5" }}
      bg={bgMode}
      w="85%"
      h={{ base: "flex", lg: "30rem" }}
    >
      {/* blog post image box */}
      <Box display="flex" flex="1" position="relative" alignItems="center">
        <Box
          width={{ base: "100%", sm: "85%" }}
          zIndex="2"
          marginLeft={{ base: "0", sm: "5%" }}
          marginTop="5%"
        >
          <LinkBox>
            <LinkOverlay href={`blog/${post.slug}`}>
              <Image
                borderRadius="lg"
                src={post.frontmatter.cover_image}
                alt="some good alt text"
                objectFit="contain"
              />
            </LinkOverlay>
          </LinkBox>
        </Box>
      </Box>
      {/* blog info box */}
      <Box
        display="flex"
        flex="1"
        flexDirection="column"
        alignContent={{ base: "center", md: "left" }}
        marginTop={10}
        marginRight={3}
      >
        {/* <HStack spacing={2}>
            {post.tags.map((tag) => {
              return (
                <Tag size={"md"} variant="solid" colorScheme="blue" key={tag}>
                  {tag}
                </Tag>
              );
            })}
          </HStack> */}
        <LinkBox>
          <LinkOverlay href={`blog/${post.slug}`} color={mode}>
            <Heading
              marginTop="1"
              textAlign={{ base: "center", md: "left" }}
              size="2xl"
            >
              {post.frontmatter.title}
            </Heading>
          </LinkOverlay>
        </LinkBox>
        <Text
          as="p"
          my="2"
          color={mode}
          fontSize={["md", "lg", "xl", "2xl"]}
          textAlign={{ base: "center", md: "left" }}
        >
          {post.frontmatter.excerpt}
        </Text>
        {/* <Flex
          alignContent="flex-end"
          justifyContent={{ base: "center", md: "left" }}
        >
          <BlogAuthor name={post.author} date={new Date()} />
        </Flex> */}
      </Box>
    </Box>
  );
};

export default BlogCard;
