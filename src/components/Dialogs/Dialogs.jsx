import React from "react";
import components from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/reducers/dialogs-reducer";


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
    let state = props.store.getState().dialogPage;

    let dialogsElement = state.dialogs
        .map((data) => <Dialog name={data.name} id={data.id}/>
        );
    let messagesElements = state.messagges
        .map((data) => <Message message={data.message} id={data.id}/>
        );
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (event)=>{
        let text = event.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(text))
    }
    return (
        <div className={components.dialogs}>
            <div className={components.dialogs__items}>
                {dialogsElement}
            </div>
            <div className={components.messages}>

                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder='Enter your message'>

                        </textarea>
                    </div>
                    <div><button onClick={ onSendMessageClick }>Send</button></div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;
