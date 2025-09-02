import '../styles/Pages.css';
import DisplayProfileBlock from '../components/ProfileImage.jsx';
import DisplayAboutMeSection from '../components/AboutMeSection.jsx';
import DisplayServicesTextBlock from '../components/MyServicesSection.jsx';

const Home = () => {
    return (
        <div className='two-columns'>
            <div className='half-column'>
                <DisplayProfileBlock/>
            </div>
            <div className='half-column'>
                <DisplayAboutMeSection/>
                <DisplayServicesTextBlock/>
            </div>
        </div>
    );
};

export default Home;