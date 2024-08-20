import style from "@/styles/posts-grid.module.css";
import PostItem from "./posts-item";

const PostGrid = (props) => {
  const { posts } = props;
  return (
    <ul className={style.grid}>
      {posts.map((item) => (
        <PostItem key={item.slug} post={item} />
      ))}
    </ul>
  );
};

export default PostGrid;
