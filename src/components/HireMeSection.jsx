import { FaEnvelope, FaHandshake, FaPhone } from 'react-icons/fa';
import { Moto, GetInTouch, Email, Phone, Adress}  from '../constants/texts.js';

function HireMe() {
  return(
    <div className='single-column'>
      <h1>Get In Touch</h1>
      <div className='small-colored-squere'/>
      <h2 className='moto'>{Moto}</h2>
      <div className='two-columns'>
        <div className='bigger-column bg-darker'>
          <h2>Send me a message</h2>
          <div className='contact-name-informations'>
            <p>First name</p>
            <p>Last name</p>
          </div>
          <div className='contact-name'>
            <input name='firstName' placeholder="Your first name"/>
            <input name='lastName'  placeholder="Your first name"/>
          </div>
          <p>Email</p>
          <input name='email' placeholder="Your email@example.com"/>
          <p>Subject</p>
          <input name='subject' placeholder="Project discussion"/>
          <p>Message</p>
          <input name='content' className='content' placeholder="Tell me about your project..."/>
          <button className="button send-mail" onClick={() => {
          }}><FaHandshake className='icon'/>Hire me</button>
        </div>
        <div className='smaller-column'>
          <h2>Let's connect</h2>
          <p>{GetInTouch}</p>
          <div className='hire-me-contact-details'>
            <FaEnvelope className='icon'/>
            <div><p>Email</p><p>{Email}</p></div>
          </div>
          <div className='hire-me-contact-details'>
            <FaPhone className='icon'/>
            <div><p>Phone</p><p>{Phone}</p></div>
          </div>
          <div className='hire-me-contact-details'>
            <FaPhone className='icon'/>
            <div><p>Address</p><p>{Adress}</p></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HireMe;