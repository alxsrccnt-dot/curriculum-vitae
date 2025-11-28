import { FaBriefcase, FaCode, FaFacebook, FaGlobe, FaInstagram, FaLinkedin, FaMapLocation, FaPhone, FaSquareEnvelope } from 'react-icons/fa6';
import { FullName, JobTitle, MainSkills, Location, Languages, WelcomeMessage }  from '../constants/texts.js';
import '../styles/Pages.css';
import {
    FaBirthdayCake
} from "react-icons/fa";

function DisplayPersonalDetailsSection() {
    var birthDate = new Date(1998, 5, 20);
    var engagementDate = new Date(2021, 8, 20);
    var systemDate = new Date();
    var pastTime = (systemDate.getTime() - birthDate.getTime()) / 1000;
    var engagementTime = (systemDate.getTime() - engagementDate.getTime()) / 1000;
    pastTime /= (60 * 60 * 24);
    engagementTime /= (60 * 60 * 24);
    var age = Math.abs(Math.round(pastTime / 365.25));
    var experienceInYears = Math.abs(Math.round(engagementTime / 365.25));

    return (
        <div className="about-me-content">
            <div className='personal-details-section'>
                <p className='welcome-message'>{WelcomeMessage}</p>
                <div className='welcome-message-tail'/>
                <p className='my-name'>I'm <h1>{FullName}</h1></p>
                <section className='personal-informations'>
                    <div className='personal-information'><FaBriefcase className='icon'/><p>{JobTitle} with {experienceInYears}+ years</p></div>
                    <div className='personal-information'><FaCode className='icon'/><p>{MainSkills}</p></div>
                    <div className='personal-information'><FaBirthdayCake className='icon'/><p>{ age } years old</p></div>
                    <div className='personal-information'><FaMapLocation className='icon'/><p>Based in {Location}</p></div>
                    <div className='personal-information'><FaGlobe className='icon'/><p>{Languages}</p></div>
                </section>
            </div>
            <div className='social-buttons'>
                <FaLinkedin className='icon'/>
                <FaFacebook className='icon'/>
                <FaInstagram className='icon'/>
            </div>
        </div>
    );
}

export default DisplayPersonalDetailsSection;