import React from 'react';
import logoSvg from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navigation";
import Profile from "./components/Profile/Profile";

const App = () => {
    return (
        <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <Profile/>
        </div>

    );
}


export default App;