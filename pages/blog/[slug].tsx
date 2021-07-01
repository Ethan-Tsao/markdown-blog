import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";
import unified from "unified";
import parse from "remark-parse";
import ReactMarkdown from "react-markdown";
import React from "react";
import Link from "next/link";
import BlogCard from "components/Card";
import Navbar from "components/Navbar";
import {
  Box,
  Flex,
  Heading,
  useColorModeValue,
  Image,
  Text,
} from "@chakra-ui/react";

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

export async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

const PostPage: React.FC<Props> = ({
  frontmatter: { title, date, cover_image },
  slug,
  content,
}) => {
  const mode = useColorModeValue("solarizedDark.600", "solarizedLight.500");
  return (
    // <>
    //   <Link href="/blog">Go Back</Link>
    //   <h1>{title}</h1>
    //   <h1>Posted on {date}</h1>
    //   <img src={cover_image}></img>
    //   <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
    // </>
    <Box maxW="65%" mx="auto" px={{ base: "6", lg: "8" }}>
      <Navbar />
      <Flex margin={4} flexDirection="column" px={{ base: "6", lg: "8" }}>
        <Heading as="h1" size="2xl" py={5} textAlign="left" color={mode}>
          {title}
        </Heading>
        <Heading as="h3" size="lg" py={5} textAlign="left" color={mode}>
          {date}
        </Heading>
        <Image w="100%" src={cover_image} my={8} />
      </Flex>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
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

  const { data: frontmatter, content: oldContent } = matter(markdownWithMeta);

  const content = await markdownToHtml(oldContent);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
