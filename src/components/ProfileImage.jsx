import DisplayImage from "./SimpleImage";
import ProfilePicture from "../images/img.jpg"

function DisplayProfileBlock() {
    var profilePictureAlt = 'External Image';

    return (
      <DisplayImage
       imageUrl={ProfilePicture}
       imageAlt={profilePictureAlt}/>
    );
  }
  
  export default DisplayProfileBlock; 