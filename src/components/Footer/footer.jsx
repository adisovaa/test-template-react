import React from 'react'
import './footer.css'
import facebook from './../../images/facebook.png'
import instagram from './../../images/instagram.png'
import youtube from './../../images/youtube.jpg'

const Footer = () => {
    return (
        <footer>
            <div className="footerItems">
                <div className="icons">
                    <img src={facebook} alt=""/>
                    <img className="insta" src={instagram} alt=""/>
                    <img src={youtube} alt=""/>
                </div>
                <div className="right">
                    <p>2021/All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer