import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchPostsAsync, selectPosts, selectStatus, Status } from "../../store/reducers/posts";
import SinglePost from "./SinglePost";

interface IPostsProps {}

const Posts: React.FC<IPostsProps> = (props) => {
  const posts = useAppSelector(selectPosts);
  const status = useAppSelector(selectStatus);
  const dispatch = useAppDispatch();

  useEffect(
    function getPosts() {
      dispatch(fetchPostsAsync());
    },
    [dispatch],
  );

  let contents;

  if (status !== Status.UpToDate) {
    contents = <p>{status}</p>;
  } else {
    contents = (
      <article className="card">
        <section className="card-body">
          <h3>{status}</h3>
          {/* Form goes here */}
          {posts &&
            posts.length > 0 &&
            posts.map(function renderPost(post) {
              return <SinglePost key={post.id} post={post} />;
            })}
        </section>
      </article>
    );
  }

  return (
    <>
      <h1>Posts</h1>
      {contents}
    </>
  );
};

export default Posts;
