import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import React from "react";
import Link from "next/link";

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
  return (
    <>
      <Link href="/blog">Go Back</Link>
      <h1>{title}</h1>
      <h1>Posted on {date}</h1>
      <img src={cover_image}></img>
      <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
    </>
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
