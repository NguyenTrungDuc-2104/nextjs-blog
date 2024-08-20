import Hero from "@/components/home-page/hero";
import FeaturedPosts from "@/components/home-page/featured-post";
import { getFeaturedPosts } from "@/lib/posts-util";
import Head from "next/head";

const HomePage = (props) => {
  const { posts } = props;

  return (
    <>
      <Head>
        <title>Koduck Blog</title>
        <meta
          name="description"
          content="I post about programing and web development."
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
};
export function getStaticProps() {
  const postFeatured = getFeaturedPosts();
  return {
    props: { posts: postFeatured },
    revalidate: 60,
  };
}
export default HomePage;
