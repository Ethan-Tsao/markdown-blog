import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import React from "react";
import { Navbar } from "components/Navbar";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import {
  Box,
  Flex,
  Heading,
  useColorModeValue,
  Image,
  Button,
  AspectRatio,
} from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import Markdown from "components/Markdown";

interface Frontmatter {
  title: string;
  date: string;
  cover_image: string;
  video: string;
}

interface Props {
  frontmatter: Frontmatter;
  slug: string;
  content: string;
}

const PostPage: React.FC<Props> = ({
  frontmatter: { title, date, cover_image, video },
  slug,
  content,
}) => {
  const mode = useColorModeValue("solarizedDark.600", "solarizedLight.500");
  return (
    <Box
      maxW={{ base: "90%", lg: "65%" }}
      mx="auto"
      px={{ base: "6", lg: "8" }}
    >
      <Navbar />
      <Link href="/game-blog" passHref>
        <Button size="sm" color={mode} mx={{ base: "6", lg: "8" }}>
          <FaArrowLeft />
          Back to Video Game Blog
        </Button>
      </Link>
      <Flex flexDirection="column" px={{ base: "6", lg: "8" }}>
        <Heading as="h1" size="2xl" py={5} textAlign="left" color={mode}>
          {title}
        </Heading>
        <Heading as="h3" size="lg" py={5} textAlign="left" color={mode}>
          {date}
        </Heading>
        {video != "none" && (
          <AspectRatio ratio={16 / 9} mb={5}>
            <iframe src={video} />
          </AspectRatio>
        )}
        {cover_image != "none" && (
          <Image w="100%" src={cover_image} my={8} alt="cover-image" />
        )}
      </Flex>
      <Box color={mode}>
        <Markdown text={content} />
      </Box>
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
  const files = fs.readdirSync(path.join("posts/game-posts"));

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
    path.join("posts/game-posts", slug + ".md"),
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
