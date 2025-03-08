import React from 'react';
import '../styles/App.css';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import DisplayName from '../components/nameTitle';
import DisplayProfileBlock from '../components/ProfileImage';

function Home() {
  return (
    <div className='home'>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <DisplayProfileBlock/>
      <DisplayName/>
    </div>
  );
}

export default Home;