import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = () => {
    let postData = [
        {id: 1, message: "Hi, how are you?", likesCoun: 12},
        {id: 2, message: "It's my first post", likesCoun: 5},
        {id: 3, message: "Privet", likesCoun: 5}
    ];

    return (
        <div className={classes.postsBlock}>
            <div>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>Add Post</button>
                    </div>
                </div>
                <div className={classes.posts}>
                    <Post message={postData[0].message} id={postData[0].id} likesCount={postData[0].likesCoun} />
                </div>
            </div>
        </div>
    );
}

export default MyPosts;
