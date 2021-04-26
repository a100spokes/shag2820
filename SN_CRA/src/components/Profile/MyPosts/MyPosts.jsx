import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

  let posts = [
    { id: 1, message: "Hi, how are you?", likesCount: "12" },
    { id: 2, message: "It`s my first post", likesCount: 10 },
  ];

  let postsElements = posts.map(post =><Post message={post.message} count={post.likesCount} />)

  return (
    <div className={classes.postBlock}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add posts</button>
        </div>
      </div>
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
