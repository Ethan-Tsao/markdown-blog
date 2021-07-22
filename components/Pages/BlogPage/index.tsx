import BlogCard from "components/Card";
import { Flex, Heading } from "@chakra-ui/react";

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
}

const BlogPage: React.FC<Props> = ({ posts }: Props) => {
  return (
    <>
      <Flex flexDirection="column" alignItems="center">
        {posts.map((post: IPost) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </Flex>
      <Heading my={8}>
        Don&apos;t worry! There&apos;s always more to come! ;)
      </Heading>
    </>
  );
};

export default BlogPage;
