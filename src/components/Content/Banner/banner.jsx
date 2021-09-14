import React from 'react'
import './banner.css'
import './media.css'
import icon from './../../../images/line.png'
import icon2 from './../../../images/line2.png'

const Banner = () => {
    return (
        <>
            <div className="banner">
                <h1>Sony’s PlayStation Network experiencing outage Saturday</h1>
             <div className="bannerText">
                 <h6>Gadgets</h6>
                 <h4>New MacBook with M1 chip announced</h4>
                 <div className="text_hesh">
                     <p>#apple #mac #m1</p>
                     <h6>Read more</h6>
                     <span className='banner_icons_img'>
                         <img src={icon} alt=""/>
                         <img src={icon2} alt=""/>
                     </span>
                 </div>
             </div>
                <div className="banner_block"></div>
            </div>
        </>
    )
}
export default Banner