import React from "react";
import classes from './Post.css'

const Post = (props) => {
    return (

                <div className={classes.item}>
                   <span>{props.message}</span>
                    <div>
                        Likes: <span>{props.likesCount}</span>
                    </div>

                </div>



    );
}

export default Post;
