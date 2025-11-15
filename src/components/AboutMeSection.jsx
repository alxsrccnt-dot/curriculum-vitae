import { FullName, JobTitle, Location, AboutMeDescription }  from '../constants/texts.js';
import '../styles/Pages.css';

function DisplayAboutMeSection() {
    return (
        <div className="about-me-content">
            <h1>Why I chose this path</h1>
            <p className='about-me-content-description'>
                { AboutMeDescription }
            </p>
        </div>
    );
}

export default DisplayAboutMeSection;