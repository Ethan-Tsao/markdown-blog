import React from "react";
import Link from "next/link";

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

const Post: React.FC<IIPost> = ({ post }: IIPost) => {
  return (
    <div>
      <img src={post.frontmatter.cover_image}></img>
      <div>Posted on {post.frontmatter.date}</div>
      <h3>{post.frontmatter.title}</h3>
      <p>{post.frontmatter.excerpt}</p>
      <Link href={`/blog/${post.slug}`}>
        <a>Read More</a>
      </Link>
    </div>
  );
};

export default Post;
