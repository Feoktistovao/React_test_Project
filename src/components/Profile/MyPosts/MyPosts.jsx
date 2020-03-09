import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <div>
                <img
                    src='https://www.remove.bg/assets/start_remove-79a4598a05a77ca999df1dcb434160994b6fde2c3e9101984fb1be0f16d0a74e.png'/>
            </div>
            <div>
                <span>My posts</span>
                <div>
                    <Post message={'Hi, how are you?'} likes={15}/>
                    <Post message={"It's my first post"} likes={5}/>
                </div>
            </div>
        </div>
    );
}

export default MyPosts;
