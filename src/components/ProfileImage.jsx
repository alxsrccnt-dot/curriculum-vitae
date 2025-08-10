import ProfilePicture from "../images/profile.jpg";
import DisplayName from '../components/NameTitle.jsx';
import DisplayImage from "./SimpleImage";

function DisplayProfileBlock() {
  var profilePictureAlt = 'External Image';

  return (
    <div className="profile-photo">
      <DisplayImage
        imageUrl={ProfilePicture}
        imageAlt={profilePictureAlt}/>
      <DisplayName/>
    </div>
  );
}

export default DisplayProfileBlock; 