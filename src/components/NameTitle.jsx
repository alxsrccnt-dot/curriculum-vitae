import { FullName } from "../constants/texts.js";

function DisplayName()
{
    return (
        <div className='name-block'>
            <h1>{FullName}</h1>
        </div>
    );
}

export default DisplayName;