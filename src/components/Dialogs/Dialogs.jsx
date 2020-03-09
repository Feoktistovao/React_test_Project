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

const Dialogs = () => {
    let dialogs = [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Oleg'},
        {id: 3, name: 'Natali'}
    ];

    let messages = [
        {id: 1, message: "hello"},
        {id: 2, message: "Buy"},
        {id: 3, message: "Privet"}
    ];

    return (
        <div className={components.dialogs}>
            <div className={components.dialogs__items}>
                {dialogs
                    .map((data) => <Dialog name={data.name} id={data.id}/>
                )}
            </div>
            <div className={components.messages}>
                {messages
                    .map((data) => <Message message={data.message} id={data.id}/>
                )}

            </div>
        </div>
    );
}

export default Dialogs;
