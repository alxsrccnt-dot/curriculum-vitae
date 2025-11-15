import '../styles/Pages.css';
import '../styles/App.css';

import { useRef } from 'react';

import DisplayProfileBlock from '../components/ProfileImage.jsx';
import DisplayAboutMeSection from '../components/AboutMeSection.jsx';
import DisplayServicesTextBlock from '../components/MyServicesSection.jsx';
import JobsList from "../components/JobsList";
import SkillsList from "../components/SkillsSection";
import HireMe from '../components/HireMeSection.jsx';
import DisplayPersonalDetailsSection from '../components/PersonalDetailsSection.jsx';

import {
    FaUserAlt,
    FaDownload,
    FaSuitcase,
} from "react-icons/fa";
import { FaFile, FaHandshakeSimple, FaMessage } from 'react-icons/fa6';
import DisplayCompanyLogoBlock from '../components/CompanyLogo.jsx';

function Presentation() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const historyRef = useRef(null);
  const contactRef = useRef(null);

    return (
        <div className='spp-content bg-gray-900\/50'>
            <section className='spp-navigation'>
                <div className="top-section">
                    <DisplayCompanyLogoBlock/>
                </div>
                <div className="navigation-section">
                    <button className="button" onClick={() => {
                        homeRef.current?.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }}>
                       <FaUserAlt className='icon'/>Home
                    </button>
                    <button className="button" onClick={() => {
                        aboutRef.current?.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }}>
                       <FaFile className='icon'/> About
                    </button>
                    <button className="button" onClick={() => {
                        historyRef.current?.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }}>
                       <FaSuitcase className='icon'/> Experience
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
                    <button className="button" onClick={() => {
                        contactRef.current?.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }}>
                        <div className="icon">
                            <FaDownload/>
                        </div>
                        <h1 >Resume</h1>
                    </button>
                    
                </div>
            </section>
            <div className='spp-prezentation'>
                <section ref={homeRef} id="home" className='spp-prezentation-slider'>
                    <div className='two-columns'>
                        <div className='smaller-column'>
                            <DisplayProfileBlock/>
                        </div>
                        <div className='bigger-column bg-dark'>
                            <DisplayPersonalDetailsSection/>
                            <button className="button hire-me" onClick={() => {
                                contactRef.current?.scrollIntoView({
                                    behavior: 'smooth'
                                });
                            }}><FaHandshakeSimple className='icon'/>Hire me</button>
                        </div>
                    </div>
                </section>
                <section ref={aboutRef} id="about" className='spp-prezentation-slider bg-gray'>
                    <div className='two-columns'>
                        <div className="bigger-column">
                            <DisplayAboutMeSection/>
                            <div className='small-colored-squere'/>
                            <DisplayServicesTextBlock/>
                        </div>
                        <div className='smaller-column'>
                            <SkillsList/>
                        </div>
                    </div>
                </section>
                <section ref={historyRef} id="history" className='spp-prezentation-slider bg-darker'>
                    <JobsList/>
                </section>
                <section ref={contactRef} id="contact" className='spp-prezentation-slider bg-dark'>
                    <HireMe/>
                </section>
            </div>
        </div> 
    );
}

export default Presentation;
