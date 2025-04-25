function DisplayImage({imageUrl, imageAlt}) {
  return (
    <img 
      className="profile-img"
      src={imageUrl}
      alt={imageAlt}/>
  );
}

export default DisplayImage;