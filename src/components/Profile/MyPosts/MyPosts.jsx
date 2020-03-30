import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";




const MyPosts = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div className={classes.postsBlock}>
            <div>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
                    </div>
                    <div>
                        <button onClick={ addPost }>Add Post</button>
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
