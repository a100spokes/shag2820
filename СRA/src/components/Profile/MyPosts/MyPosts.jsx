import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
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
        <Post message="Hi, how are you?" count="13" />
        <Post message="It`s my first post" count="3" />
      </div>
    </div>
  );
};

export default MyPosts;
