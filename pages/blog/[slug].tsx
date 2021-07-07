/* eslint-disable react/no-children-prop */
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import React, { PropsWithChildren, ReactChildren } from "react";
import Navbar from "components/Navbar";
import {
  Box,
  Flex,
  Heading,
  useColorModeValue,
  Image,
  Text,
} from "@chakra-ui/react";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";

interface Frontmatter {
  title: string;
  date: string;
  cover_image: string;
}

interface Props {
  frontmatter: Frontmatter;
  slug: string;
  content: string;
}

const PostPage: React.FC<Props> = ({
  frontmatter: { title, date, cover_image },
  slug,
  content,
}) => {
  const mode = useColorModeValue("solarizedDark.600", "solarizedLight.500");
  return (
    <Box maxW="65%" mx="auto" px={{ base: "6", lg: "8" }}>
      <Navbar />
      <Flex margin={4} flexDirection="column" px={{ base: "6", lg: "8" }}>
        <Heading as="h1" size="2xl" py={5} textAlign="left" color={mode}>
          {title}
        </Heading>
        <Heading as="h3" size="lg" py={5} textAlign="left" color={mode}>
          {date}
        </Heading>
        <Image w="100%" src={cover_image} my={8} alt="cover_image" />
      </Flex>
      <ReactMarkdown
        children={content}
        components={ChakraUIRenderer()}
        skipHtml={false}
      />
    </Box>
  );
};

export default PostPage;

// getStaticPaths and getStaticProps
type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }: Params) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
