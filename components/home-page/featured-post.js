import PostGrid from "../posts/posts-grid";
import style from "@/styles/featured-posts.module.css";

const FeaturedPosts = (props) => {
  const { posts } = props;
  return (
    <section className={style.latest}>
      <h2>Featured Post</h2>
      <PostGrid posts={posts} />
    </section>
  );
};

export default FeaturedPosts;
