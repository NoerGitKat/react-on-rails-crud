import * as React from "react";

interface IPostsProps {}

const Posts: React.FC<IPostsProps> = (props) => {
  return (
    <ul>
      <li>Post #1</li>
    </ul>
  );
};

export default Posts;
