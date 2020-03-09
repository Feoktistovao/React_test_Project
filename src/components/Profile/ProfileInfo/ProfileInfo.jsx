import React from "react";
import css from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
        <div>
            <img src='https://www.remove.bg/assets/start_remove-79a4598a05a77ca999df1dcb434160994b6fde2c3e9101984fb1be0f16d0a74e.png' alt={'Ava'}/>
        </div>
            <div className={css.descriptionBlock}>
                Ava + description
        </div>
        </div>

    );
}

export default ProfileInfo;
