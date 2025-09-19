import { FullName } from "../constants/texts.js";
import {
    FaLinkedin
} from "react-icons/fa";

function DisplayName()
{
    return (
        <div className='name-block'>
            <h1>{FullName}</h1>
            <p>Software engineer</p>
            <div  className="social-buttons">
                <FaLinkedin  className="social-button"/>
            </div>
        </div>
    );
}

export default DisplayName;