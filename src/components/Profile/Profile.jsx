import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props)=> {

    return(
        <div>
            <ProfileInfo />
            <MyPosts data={props.data.postData}/>
        </div>
    );
}

export default Profile;
