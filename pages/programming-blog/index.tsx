import fs from "fs";
import path from "path";
import matter from "gray-matter";
import React from "react";
import { GetStaticProps } from "next";
import BlogCard from "components/Card";
import Navbar from "components/Navbar";
import { Box, Flex } from "@chakra-ui/react";

interface Frontmatter {
  title: string;
  date: string;
  cover_image: string;
  excerpt: string;
}

interface IPost {
  frontmatter: Frontmatter;
  slug: string;
  content: string;
}

interface Props {
  posts: IPost[];
}

const BlogPage: React.FC<Props> = ({ posts }) => {
  return (
    <Box
      maxW={{ base: "90%", lg: "65%" }}
      mx="auto"
      px={{ base: "6", lg: "8" }}
      align="center"
    >
      <Navbar />
      <Flex flexDirection="column" alignItems="center">
        {posts.map((post: IPost) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </Flex>
    </Box>
  );
};

export default BlogPage;

export const getStaticProps: GetStaticProps = async () => {
  const files = fs.readdirSync(path.join("posts/programming-posts"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const markdownWithMeta = fs.readFileSync(
      path.join("posts/programming-posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts.sort(
        (post1, post2) =>
          new Date(post2.frontmatter.date).getTime() -
          new Date(post1.frontmatter.date).getTime()
      ),
    },
  };
};
