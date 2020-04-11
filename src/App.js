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


const App = (props) => {


    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route render={ () => <Dialogs
                        store={props.store}
                        data={props.state.dialogPage}/>
                    } path={"/dialogs"}/>
                    <Route render={ () => <Profile

                        data={props.state.profilePage}
                        dispatch={props.dispatch}
                    />
                    } path={'/profile'}/>
                    <Route render={News} path={'/news'}/>
                    <Route render={Music} path={'/music'} />
                    <Route render={Settings} path={'/settings'} />
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
