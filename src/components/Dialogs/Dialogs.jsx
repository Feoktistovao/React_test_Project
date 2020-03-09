import React from "react";
import components from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialog = (props)=>{
    return(
        <div>
            <div className={components.dialog + ' ' + components.active}>
                <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
            </div>
        </div>
    );
}

const Message = (props) =>{
    return(
        <div>
            <div className={components.message}>
                {props.message}
            </div>
        </div>
    );
}

const Dialogs = ()=> {
    return (
        <div className={components.dialogs}>
            <div className={components.dialogs__items}>
                <Dialog name={'Alex'} id={1}/>
                <Dialog name={'Oleg'} id={2}/>
                <Dialog name={'Natali'} id={3}/>
            </div>
            <div className={components.messages}>
                <Message message={'Hello'}/>
                <Message message={'Buy'}/>
                <Message message={'Privet'}/>
            </div>
        </div>
    );
}

export default Dialogs;
