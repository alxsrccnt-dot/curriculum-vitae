import './styles/App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Work from './pages/Work.jsx';
import Contact from './pages/Contact.jsx';
import Home from './pages/Home.jsx';


const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};


export default App;
 