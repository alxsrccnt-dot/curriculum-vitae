import React from 'react';
import '../styles/Pages.css';
import DisplayProfileBlock from '../components/ProfileImage.jsx';
import DisplayAboutMeSection from '../components/AboutMeSection.jsx';
import DisplayServicesTextBlock from '../components/MyServicesSection.jsx';

const Home = () => {
    return (
        <div className='two-columns'>
            <div className='left-column'>
                <DisplayProfileBlock/>
            </div>
            <div className='right-column'>
                <DisplayAboutMeSection/>
                <DisplayServicesTextBlock/>
            </div>
        </div>
    );
};

export default Home;