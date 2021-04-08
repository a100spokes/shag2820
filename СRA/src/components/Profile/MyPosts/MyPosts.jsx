import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My post
      <div>New post</div>
      <div className={classes.posts}>
        <Post message="Hi, how are you?" count='13'/>
        <Post message="It`s my first post" count='3' />
      </div>
    </div>
  );
};

export default MyPosts;
