import React, { useEffect } from "react";
import BlogCard from "components/Card";
import { Navbar } from "components/Navbar";
import { Box, Flex, Heading, useColorModeValue } from "@chakra-ui/react";
import Head from "components/Head";

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
  content: string;
}

interface Props {
  posts: IPost[];
  title: string;
}

const BlogPage: React.FC<Props> = ({ posts, title }: Props) => {
  const mode = useColorModeValue("solarizedDark.600", "solarizedLight.500");
  return (
    <Box
      maxW={{ base: "90%", lg: "65%" }}
      mx="auto"
      px={{ base: "6", lg: "8" }}
      align="center"
      color={mode}
    >
      <Head title={title} />
      <Navbar />
      <Flex flexDirection="column" alignItems="center">
        {posts.map((post: IPost) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </Flex>
      <Heading my={8}>
        Don&apos;t worry! There&apos;s always more to come! ;)
      </Heading>
    </Box>
  );
};

export default BlogPage;
