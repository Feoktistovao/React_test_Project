import React from "react";
import components from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    return (
        <div>
            <div className={components.dialog + ' ' + components.active}>
                <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
            </div>
        </div>
    );
}

const Message = (props) => {
    return (
        <div>
            <div className={components.message}>
                {props.message}
            </div>
        </div>
    );
}

const Dialogs = (props) => {


    return (
        <div className={components.dialogs}>
            <div className={components.dialogs__items}>
                {props.dialogs
                    .map((data) => <Dialog name={data.name} id={data.id}/>
                )}
            </div>
            <div className={components.messages}>
                {props.messages
                    .map((data) => <Message message={data.message} id={data.id}/>
                )}

            </div>
        </div>
    );
}

export default Dialogs;
