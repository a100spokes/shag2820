import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  console.log(props.message)
  return (
    <div className={classes.posts}>
      <div className={classes.item}>
      <img src="https://www.film.ru/sites/default/files/filefield_paths/maxresdefault_1_24.jpg"/>
        {props.message}
        </div>
     <div>
       <span>like {props.count}</span>
     </div>
    </div>
  );
};

export default Post;
