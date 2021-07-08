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
    <LinkBox>
      <LinkOverlay href={`${route}/${post.slug}`}>
        <Box
          marginTop={{ base: "1", sm: "5" }}
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          justifyContent="center"
          rounded={12}
          boxShadow="2xl"
          paddingBottom={{ base: "1", sm: "5" }}
          bg={bgMode}
          w="100%"
          h={{ base: "flex", xl: "30rem" }}
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
                <LinkOverlay href={`${route}/${post.slug}`}>
                  {post.frontmatter.video != "none" && (
                    <AspectRatio
                      ratio={16 / 9}
                      w={{ base: "95%", xl: "500px" }}
                    >
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
            <LinkBox>
              <LinkOverlay href={`${route}/${post.slug}`} color={mode}>
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
          </Box>
        </Box>
      </LinkOverlay>
    </LinkBox>
  );
};

export default BlogCard;
