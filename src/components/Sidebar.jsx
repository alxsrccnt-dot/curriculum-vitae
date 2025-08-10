import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaCommentAlt,
    FaDownload
} from "react-icons/fa";


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Home",
            icon:<FaTh/>
        },
        {
            path:"/work",
            name:"Work",
            icon:<FaCommentAlt/>
        },
        {
            path:"/contact",
            name:"Contact",
            icon:<FaUserAlt/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               <div className='sidebar-items'>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassname="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
                </div>
                <div className="bottom_section">
                   <h1 display="block">Download resume</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaDownload/>
                   </div>
               </div>
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;