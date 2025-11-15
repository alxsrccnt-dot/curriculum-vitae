import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
    FaBars,
    FaUserAlt,
    FaDownload,
    FaHistory
} from "react-icons/fa";
import { FaMessage } from 'react-icons/fa6';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Home",
            icon:<FaUserAlt/>
        },
        {
            path:"/work",
            name:"Work",
            icon:<FaHistory/>
        },
        {
            path:"/contact",
            name:"Contact",
            icon:<FaMessage/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "55px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               <div className='sidebar-items' style={{height: isOpen ? 'calc(100% - 150px)' : 'calc(100% - 130px)'}}>
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
                   <div style={{marginRight: isOpen ? "20px" : "0px"}} className="download">
                       <FaDownload/>
                   </div>
                   <h1 style={{display: isOpen ? "block" : "none"}}>Resume</h1>
               </div>
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;