const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
    _state : {
        profilePage: {
            postData: [
                {id: 1, message: "Hi, how are you?", likesCount: 12},
                {id: 2, message: "It's my first post", likesCount: 5},
                {id: 3, message: "Privet", likesCount: 5}
            ],
            newPostText: 'feoktistov'
        },
        dialogPage: {
            messagges: [
                {id: 1, message: "hello"},
                {id: 2, message: "Buy"},
                {id: 3, message: "Privet"}
            ],
            dialogs: [
                {id: 1, name: 'Alex'},
                {id: 2, name: 'Oleg'},
                {id: 3, name: 'Natali'}
            ],
            newMessageBody : ""
        },
        sidebar: {}
    },
    getState() {
        return this._state;
    },
    _callSubscriber () {
        console.log('State changed');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            };
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText='';
            this._callSubscriber(this._state);
        } else
                if (action.type === UPDATE_NEW_POST_TEXT) {
                this._state.profilePage.newPostText = action.newText;
                this._callSubscriber(this._state);
            }
            else
                if (action.type === UPDATE_NEW_MESSAGE_BODY) {
                this._state.dialogPage.newMessageBody = action.body;
                this._callSubscriber(this._state);
            }
            else
                if (action.type === SEND_MESSAGE) {
                let body = this._state.dialogPage.newMessageBody;
                this._state.dialogPage.newMessageBody = '';
                this._state.dialogPage.messagges.push({id : 6, message: body});
                this._callSubscriber(this._state);
            }
    }
}

export  const addPostActionCreator = () => {
    return (
    {
        type : ADD_POST
    })
}

export  const  updateNewPostTextActionCreator = (text) => {
    return (
    {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    })
}

export const sendMessageCreator = () => ({type : SEND_MESSAGE})
export const updateNewMessageBodyCreator = (text) => {
    return (
        {
            type : UPDATE_NEW_MESSAGE_BODY,
            body: text
        }
    )
}

export default store;
window.store = store;
