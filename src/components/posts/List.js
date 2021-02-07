import React from "react";
import PostItem from "@comp/posts/Item";
import data from "./items"

export default function ListPosts() {

    return(
        <div>
            {
                data.map((element)=> <PostItem key={element.id}
                                               id={element.id}
                                               title={element.title}
                                               description={element.desc}
                                               active={true}
                                               bg={element.bg}/>)
            }
        </div>
    )
}

function getTime() {
    let date = new Date();
    return date.toLocaleString();
}