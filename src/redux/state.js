import profileReducer from "./reducers/profile-reducer";
import sidebarReducer from "./reducers/sidebar-reducer";
import dialogsReducer from "./reducers/dialogs-reducer";


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
        this._state.profilePage = profileReducer(this._state.profilePage,action);
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
        this.sidebar = sidebarReducer(this.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;
