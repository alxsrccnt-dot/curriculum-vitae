import ProfilePicture from "../images/img.jpg";
import DisplayImage from "./SimpleImage";

function DisplayProfileBlock() {
  var profilePictureAlt = 'External Image';

  return (
    <div className="profile-photo">
      <DisplayImage
        imageUrl={ProfilePicture}
        imageAlt={profilePictureAlt}/>
        
    </div>
  );
}

export default DisplayProfileBlock; 