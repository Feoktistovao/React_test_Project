let rerenderEntireTree = () =>{

}

let state={
    profilePage : {
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
        dialogs : [
            {id: 1, name: 'Alex'},
            {id: 2, name: 'Oleg'},
            {id: 3, name: 'Natali'}
        ]
    }

}

export const addPost = () => {
        let newPost= {
        id: 5,
        message: state.profilePage.newPostText,
        likeCount: 0
    };
    state.profilePage.postData.push(newPost);
    state.profilePage.newPostText='';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText=newText;
    rerenderEntireTree(state);
}

export const subscribe= (observer) =>{
    rerenderEntireTree = observer;
}

export default state;
