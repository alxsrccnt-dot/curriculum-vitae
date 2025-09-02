import '../styles/App.css';
import DisplayName from '../components/NnameTitle';
import DisplayProfileBlock from '../components/ProfileImage';

function Home() {
  return (
    <div className='home'>
      <DisplayProfileBlock/>
      <DisplayName/>
    </div>
  );
}

export default Home;