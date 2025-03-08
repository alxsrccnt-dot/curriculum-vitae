import { getImageUrl } from "../helpers/utils";

function DisplayImage({imageUrl, imageAlt}) {
  return (
    <div>
      <img 
        className="test"
        src={imageUrl}
        alt={imageAlt}/>
    </div>
  );
}

export default DisplayImage;