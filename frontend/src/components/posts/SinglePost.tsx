import { IPost } from "../../store/reducers/posts";

interface ISinglePostProps {
  post: IPost;
}

const SinglePost: React.FC<ISinglePostProps> = ({ post }) => {
  return (
    <article>
      <h4>{post.title}</h4>
      <p>{post.body}</p>
    </article>
  );
};

export default SinglePost;
