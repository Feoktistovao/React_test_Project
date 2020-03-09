import React from "react";
import components from './Dialogs.module.css';

const Dialogs = ()=> {
    return (
        <div className={components.dialogs}>
            <div className={components.dialogs__items}>
                <div className={components.dialog + ' ' + components.active}>
                    Name1
                </div>
                <div className={components.dialog}>
                    Name2
                </div>
                <div className={components.dialog}>
                    Name3
                </div>
                <div className={components.dialog}>
                    Name4
                </div>
            </div>
            <div className={components.messages}>
                <div className={components.message}>
                    Hi
                </div>
                <div className={components.message}>
                    Byt
                </div>
                <div className={components.message}>
                    Buy
                </div>
            </div>
        </div>
    );
}

export default Dialogs;
