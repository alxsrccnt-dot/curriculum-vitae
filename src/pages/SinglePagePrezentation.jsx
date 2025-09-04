import '../styles/Pages.css';
import '../styles/App.css';

import { useRef } from 'react';

import DisplayProfileBlock from '../components/ProfileImage.jsx';
import DisplayAboutMeSection from '../components/AboutMeSection.jsx';
import DisplayServicesTextBlock from '../components/MyServicesSection.jsx';
import JobsList from "../components/JobsList";
import SkillsList from "../components/SkillsSection";

import {
    FaBars,
    FaUserAlt,
    FaDownload,
    FaHistory
} from "react-icons/fa";
import { FaMessage } from 'react-icons/fa6';

function Presentation() {
  const aboutRef = useRef(null);
  const historyRef = useRef(null);
  const contactRef = useRef(null);

    return (
        <div className='spp-content'>
            <section className='spp-navigation'>
                <div className="top-section">
                    <div className="icon">
                        <FaBars/>
                    </div>
                    <h1>Logo</h1>
                </div>
                <div className="navigation-section">
                    <button className="button" onClick={() => {
                        aboutRef.current?.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }}>
                       <FaUserAlt className='icon'/> About
                    </button>
                    <button className="button" onClick={() => {
                        historyRef.current?.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }}>
                       <FaHistory className='icon'/> History
                    </button>
                    <button className="button" onClick={() => {
                        contactRef.current?.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }}>
                       <FaMessage className='icon'/> Contact me
                    </button>
                </div>
                <div className="bottom-section">
                    <div className="icon">
                        <FaDownload/>
                    </div>
                    <h1 >Resume</h1>
                </div>
            </section>
            <div className='spp-prezentation'>
                <section ref={aboutRef} id="about">
                    <div className='two-columns'>
                        <div className='half-column'>
                            <DisplayProfileBlock/>
                        </div>
                        <div className='half-column'>
                            <DisplayAboutMeSection/>
                            <DisplayServicesTextBlock/>
                        </div>
                    </div>
                </section>
                <section ref={historyRef} id="history">
                    <div className='two-columns'>
                        <div className='bigger-column'>
                            <JobsList/>
                        </div>
                        <div className='smaller-column'>
                            <SkillsList/>
                        </div>
                    </div>  
                </section>
                <section ref={contactRef} id="contact">
                    <h1>Contact</h1>
                </section>
            </div>
        </div> 
    );
}

export default Presentation;
