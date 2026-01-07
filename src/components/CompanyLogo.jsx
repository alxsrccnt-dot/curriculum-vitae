import LogoPicture from "../images/logo1.png";
import DisplayImage from "./SimpleImage";

function DisplayCompanyLogoBlock() {
  var profilePictureAlt = 'Company logo';

  return (
    <div className="company-logo">
      <DisplayImage
        imageUrl={LogoPicture}
        imageAlt={profilePictureAlt}/>
    </div>
  );
}

export default DisplayCompanyLogoBlock; 