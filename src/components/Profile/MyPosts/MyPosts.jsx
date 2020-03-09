import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = () => {
    let postData = [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 5},
        {id: 3, message: "Privet", likesCount: 5}
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

                    {postData
                        .map( (data) => <Post message={data.message} id={data.id} likesCount={data.likesCount} />
                    )}

                </div>
            </div>
        </div>
    );
}

export default MyPosts;
