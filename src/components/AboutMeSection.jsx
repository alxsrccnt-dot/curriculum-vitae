import { AboutMeDescription }  from '../constants/texts.js';
import '../styles/Pages.css';

function DisplayAboutMeSection() {
    var birthDate = new Date(1998, 5, 20);
    var systemDate = new Date();
    var pastTime = (systemDate.getTime() - birthDate.getTime()) / 1000;
    pastTime /= (60 * 60 * 24);
    var age = Math.abs(Math.round(pastTime / 365.25));

    return (
        <div className="about-me-content">
            <h1>About me</h1>
            <div className='short-description'>
                <p> { age } </p> / <p> Suceava </p> / <p> Freelancer </p>
            </div>
            <p className='about-me-content-description'>
                { AboutMeDescription }
            </p>
        </div>
    );
}

export default DisplayAboutMeSection;