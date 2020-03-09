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
    let dialogsData = [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Oleg'},
        {id: 3, name: 'Natali'}
    ];

    let messageData = [
        {id: 1, message: "hello"},
        {id: 2, message: "Buy"},
        {id: 3, message: "Privet"}
    ];
    return (
        <div className={components.dialogs}>
            <div className={components.dialogs__items}>

                <Dialog name={dialogsData[0].name} id={dialogsData[0].id}/>
                <Dialog name={'Oleg'} id={2}/>
                <Dialog name={'Natali'} id={3}/>
            </div>
            <div className={components.messages}>
                <Message message={messageData[0].message} id={messageData[0].id}/>
                <Message message={'Buy'}/>
                <Message message={'Privet'}/>
            </div>
        </div>
    );
}

export default Dialogs;
