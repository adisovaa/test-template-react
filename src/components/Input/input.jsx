import React from 'react'
import './input.css'
import icon from './../../images/line.png'
import icon2 from './../../images/line2.png'

const Input = () => {
    return (
       <>
           <div className="category">
               <div className="category_items">
                   <h2>Categories</h2>
                   <ul>
                       <li>Tech</li>
                       <li>Al</li>
                       <li className='li-clr'>Social Media</li>
                       <li className='li-clr'>Games</li>
                       <li className='li-clr'>Gadgets</li>
                       <li className='li-clr'>Business</li>
                   </ul>
               </div>
               <div className="category_icons">
                   <h5>More news</h5>
                   <div className="category_icons_img">
                       <img src={icon} alt=""/>
                       <img src={icon2} alt=""/>
                   </div>
               </div>
               <div className="background"></div>
           </div>

           <div className="about">
             <div className="wrapper">
                 <div className="about_heading">
                     <h3>About TechNews</h3>
                     <div className='line'></div>
                 </div>
                 <button className='btn'>Contact us</button>
             </div>

               <div className="section">
                  <div className="wrapper">
                     <div className="section_item">
                         <div className="sitemap">
                             <h3>Sitemap</h3>
                             <ul>
                                 <li>News</li>
                                 <li>Categories</li>
                                 <li>Blog</li>
                                 <li>Contacts</li>
                             </ul>
                         </div>
                         <div className="section_about">
                             <h3>About</h3>
                             <p>We are news channel ready toshare with with the latest and the coolest technology news.  </p>
                         </div>
                     </div>
                  </div>
               </div>
           </div>

           <div className="input">
               <div className="inputWrapper">
                   <div className="inputsItem">
                       <input type="text" className="textInput"/>
                       <input type="button" className="textButton" value="Subscribe"/>
                   </div>
               </div>
           </div>
       </>
    )
}

export default Input