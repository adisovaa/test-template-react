import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import './header.css';
import './media.css';
import user from './../../images/user.png';

const Header = () => {
    const [active, setActive] = useState(true)
    let history = useHistory()
    
    const navText = ['Main', 'News from partners', 'Blog', 'Reviews', 'Accessebility']

    let showText = navText.map((text, i) =>  <p key={i}><a href="#">{text}</a></p>)

    let showNavBar = e =>{
        e.preventDefault()
        if (active){
            setActive(false)
        }else {
            setActive(true)
        }
    }

    const profileClick = () =>{
        history.push('/login')
    }

    const mainPage = () =>{
        history.push('/')
    }

    return (
        <div className="header">
            <div className="container">
                <div className="logo" onClick={mainPage}>
                    <h1>LOGO</h1>
                    <h3>Technology news</h3>
                </div>
                <div className={active ? "burger" : "burger".concat(' active')} onClick={showNavBar}>
                    <span></span>
                </div>
                <div className={active ? "menu-burger" : "menu-burger".concat(' active')}>
                    <div className="navBar">
                        {
                            showText
                        }
                    </div>
                </div>
                <div className="auth-log">
                        <img src={user} alt="user_logo"/>
                        <button className="user" onClick={profileClick}>Profile</button>
                    </div>
            </div>
        </div>
    )
}

export default Header