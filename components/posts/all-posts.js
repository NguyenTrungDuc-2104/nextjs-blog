import style from "@/styles/all-posts.module.css";
import PostGrid from "./posts-grid";
const AllPosts = (props) => {
  return (
    <section className={style.posts}>
      <h1>All Posts</h1>
      <PostGrid posts={props.posts} />
    </section>
  );
};

export default AllPosts;
