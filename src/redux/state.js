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
            ]
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber () {
        console.log('State changed');
    },
    addPost  () {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likeCount: 0
        };
        this._state.profilePage.postData.push(newPost);
        this._state.profilePage.newPostText='';
        this._callSubscriber(this._state);
    },
    updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

export default store;
window.store = store;
