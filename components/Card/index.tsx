import React from "react";
import {
  Box,
  Heading,
  Image,
  Text,
  useColorModeValue,
  LinkBox,
  LinkOverlay,
  AspectRatio,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";

interface Frontmatter {
  title: string;
  date: string;
  cover_image: string;
  excerpt: string;
  video: string;
}

interface IPost {
  frontmatter: Frontmatter;
  slug: string;
}

interface IIPost {
  post: IPost;
}

const BlogCard: React.FC<IIPost> = ({ post }: IIPost) => {
  const bgMode = useColorModeValue("solarizedLight.400", "solarizedDark.500");
  const mode = useColorModeValue("solarizedDark.600", "solarizedLight.400");
  const router = useRouter();
  const route = router.pathname;
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
      color={mode}
      minWidth="100%"
      h={{ base: "flex", xl: "30rem" }}
    >
      {/* blog post image box */}
      <Box display="flex" flex="1" position="relative" alignItems="center">
        <Box
          w={{ base: "100%", sm: "85%" }}
          zIndex="2"
          marginLeft={{ base: "0", sm: "5%" }}
          marginTop="5%"
        >
          {post.frontmatter.video != "none" && (
            <AspectRatio ratio={16 / 9}>
              <iframe src={post.frontmatter.video} />
            </AspectRatio>
          )}
          {post.frontmatter.cover_image != "none" && (
            <Image
              borderRadius="lg"
              src={post.frontmatter.cover_image}
              alt="some good alt text"
              objectFit="contain"
              w={{ base: "95%" }}
            />
          )}
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
        <LinkBox>
          <LinkOverlay>
            <Heading
              marginTop="1"
              textAlign={{ base: "center", md: "left" }}
              size="2xl"
            >
              <Link href={`${route}/${post.slug}`} passHref>
                {post.frontmatter.title}
              </Link>
            </Heading>
          </LinkOverlay>
        </LinkBox>

        <Text
          as="p"
          my="2"
          fontSize={["md", "lg", "xl", "2xl"]}
          textAlign={{ base: "center", md: "left" }}
        >
          {post.frontmatter.excerpt}
        </Text>
      </Box>
    </Box>
  );
};

export default BlogCard;
