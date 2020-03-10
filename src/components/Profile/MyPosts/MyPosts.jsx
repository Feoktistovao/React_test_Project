import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props) => {


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

                    {props.data
                        .map( (data) => <Post message={data.message} id={data.id} likesCount={data.likesCount} />
                    )}

                </div>
            </div>
        </div>
    );
}

export default MyPosts;
