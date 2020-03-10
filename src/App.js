import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navigation";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = () => {
    let postData = [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 5},
        {id: 3, message: "Privet", likesCount: 5}
    ];
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
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route render={()=><Dialogs dialogs={dialogs} messages={messages}/>} path={"/dialogs"}/>
                    <Route render={()=><Profile data={postData}/>} path={'/profile'}/>
                    <Route render={News} path={'/news'}/>
                    <Route render={Music} path={'/music'} />
                    <Route render={Settings} path={'/settings'} />
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
