import fs from "fs";
import path from "path";
import matter from "gray-matter";
import React from "react";
import { GetStaticProps } from "next";
import Post from "components/Post";
import sortByDate from "../../utils";

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
    <div>
      <div>
        {posts.map((post: IPost) => (
          <Post post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;

export const getStaticProps: GetStaticProps = async () => {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
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
